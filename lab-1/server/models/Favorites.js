import { sql } from "./config/db";

export class Favorites {
	addFavorite = (data, result) => {
		console.log(
			"About to insert to favorite => ",
			data.customerId,
			data.restaurantId
		);

		const query = `INSERT INTO FAVOURITE_RESTAURANT (CUSTOMER_ID, RESTAURANT_ID)
                            VALUES (
                                ${data.customerId},
                                ${data.restaurantId}
                            );`;

		sql.query(query, (err, res) => {
			if (err) {
				console.log(err);
				result(err, null);
				return;
			}

			console.log(
				`1 record of restaurant added to favorites => ${JSON.stringify(
					res
				)}`
			);

			result(null, data);
		});
	};
}
