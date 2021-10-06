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
			let temp = `(${element.id}, ${orderId}),`;
			queryValue += temp;
		}

		queryValue = queryValue.slice(0, -1);

		console.log("Query value => ", queryValue);

		const query = `INSERT INTO ORDER_ITEM 
                            (ITEM_ID, ORDER_ID)
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
}
