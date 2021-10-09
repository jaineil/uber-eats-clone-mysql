export class CustomerOrders {
	fetch = async (data, result) => {
		const query = `SELECT DISTINCT o.ID, o.RESTAURANT_ID, o.ADDRESS_ID, o.STATUS, o.AMOUNT, 
                            GROUP_CONCAT(i.NAME) AS DISH_NAMES, r.NAME, ra.STREET, ra.HOUSE_NUMBER, ra.CITY
                        FROM ORDER_SUMMARY as o
                        LEFT JOIN ORDER_ITEM as oi
                            ON o.ID = oi.ORDER_ID
                        LEFT JOIN ITEM as i
                            ON oi.ITEM_ID = i.ID
                        LEFT JOIN RESTAURANT as r
                            ON o.RESTAURANT_ID = r.ID
                        LEFT JOIN RESTAURANT_ADDRESS as ra
                            ON o.ADDRESS_ID = ra.ID
                        WHERE o.CUSTOMER_ID = ${data.customerId}
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
}
