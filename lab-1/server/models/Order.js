import { sql } from "./config/db.js";

export class Order {
	create = (data, result) => {
		const query = `INSERT INTO ORDER_SUMMARY 
                            (RESTAURANT_ID, CUSTOMER_ID, STATUS, ORDER_TIME, AMOUNT, ADDRESS_ID)
                        VALUES
                            (
                                "${data.restaurantId}",
                                "${data.customerId}",
                                "${data.status}",
                                "${data.time}",
                                "${data.amount}",
                                "${data.addressId}"
                            );`;

		sql.query(query, (err, res) => {
			if (err) {
				console.log(err);
				result(err, null);
				return;
			}
			console.log(`1 record inserted => ${JSON.stringify(res)}`);
			result(null, {
				orderId: res.insertId,
				...data,
			});
		});
	};

	createOrderItems = async (data, result) => {
		let queryValue = "";
		const orderId = data.orderId;

		for (const element of data.orderItems) {
			let temp = `(${element.id}, ${element.amount}, ${orderId}),`;
			queryValue += temp;
		}

		queryValue = queryValue.slice(0, -1);

		console.log("Query value => ", queryValue);

		const query = `INSERT INTO ORDER_ITEM 
                            (ITEM_ID, QUANTITY, ORDER_ID)
                        VALUES
                            ${queryValue};`;

		sql.query(query, (err, res) => {
			if (err) {
				console.log(err);
				result(err, null);
				return;
			}
			console.log(`1 record inserted => ${JSON.stringify(res)}`);
			result(null, "Done");
		});
	};

	fetchAll = async (data, result) => {
		const query = `SELECT o.ID, o.CUSTOMER_ID, o.ADDRESS_ID, o.STATUS, o.AMOUNT, 
		GROUP_CONCAT(i.NAME) AS DISH_NAMES, 
		GROUP_CONCAT(oi.QUANTITY) AS DISH_QUANTITIES, 
		GROUP_CONCAT(i.PRICE) AS DISH_PRICES, 
		c.FNAME, c.LNAME, c.CONTACT_NUMBER, ca.STREET, ca.HOUSE_NUMBER, ca.CITY, ca.STATE, ca.PINCODE 
			FROM ORDER_SUMMARY as o
			LEFT JOIN ORDER_ITEM as oi
				ON o.ID = oi.ORDER_ID
			LEFT JOIN ITEM as i
				ON oi.ITEM_ID = i.ID
			LEFT JOIN CUSTOMER as c
				ON o.CUSTOMER_ID = c.ID
			LEFT JOIN CUSTOMER_ADDRESS as ca
				ON o.ADDRESS_ID = ca.ID
			WHERE o.RESTAURANT_ID = ${data.restaurantId}
			GROUP BY o.ID;`;

		sql.query(query, (err, res) => {
			if (err) {
				console.log(err);
				result(err, null);
				return;
			}
			console.log(`Record fetched => ${JSON.stringify(res)}`);
			result(null, res);
		});
	};

	updateOrderStatus = async (data, result) => {
		const query = `UPDATE ORDER_SUMMARY SET STATUS="${data.status}" WHERE ID=${data.orderId};`;

		sql.query(query, (err, res) => {
			if (err) {
				console.log(err);
				result(err, null);
				return;
			}
			console.log(`1 record updated => ${JSON.stringify(res)}`);
			result(null, "Done");
		});
	};
}
