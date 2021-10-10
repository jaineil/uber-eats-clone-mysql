import { sql } from "./config/db.js";

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

	fetchFavorites = (data, result) => {
		console.log("About to fetch favorites for client => ", data.customerId);

		const query = `SELECT r.ID, r.NAME, r.OPENS_AT, r.CLOSES_AT, r.RESTAURANT_IMAGE_URL, ra.CITY FROM RESTAURANT r, FAVOURITE_RESTAURANT f, RESTAURANT_ADDRESS ra
                            WHERE f.RESTAURANT_ID = r.ID
								AND ra.RESTAURANT_ID = r.ID
                                AND CUSTOMER_ID = ${data.customerId};`;

		sql.query(query, (err, res) => {
			if (err) {
				console.error(err);
				result(err, null);
				return;
			}
			console.log("Fetched all favorite restaurants!");
			return result(null, res);
		});
	};
}
