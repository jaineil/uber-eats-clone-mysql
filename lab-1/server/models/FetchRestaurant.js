import { sql } from "./config/db.js";

export class FetchRestaurantTable {
	fetchAllByCustomerLocation = (data, result) => {
		console.log("Fetching restaurants by customer location");

		const query = `SELECT DISTINCT r.ID, r.NAME, r.OPENS_AT, r.CLOSES_AT, r.VEG, r.NON_VEG, r.VEGAN, r.PICKUP_OPTION, r.DELIVERY_OPTION, r.RESTAURANT_IMAGE_URL, ra.CITY 
							FROM CUSTOMER c, RESTAURANT r, CUSTOMER_ADDRESS ca, RESTAURANT_ADDRESS ra
								WHERE ca.CITY = ra.CITY
									AND r.ID = ra.RESTAURANT_ID
									AND c.ID = ${data.customerId}
						UNION

						SELECT DISTINCT r.ID, r.NAME, r.OPENS_AT, r.CLOSES_AT, r.VEG, r.NON_VEG, r.VEGAN, r.PICKUP_OPTION, r.DELIVERY_OPTION, r.RESTAURANT_IMAGE_URL, ra.CITY 
							FROM CUSTOMER c, RESTAURANT r, CUSTOMER_ADDRESS ca, RESTAURANT_ADDRESS ra
								WHERE ca.CITY != ra.CITY
									AND r.ID = ra.RESTAURANT_ID
									AND c.ID = ${data.customerId};`;

		sql.query(query, (err, res) => {
			if (err) {
				console.log(err);
				result(err, null);
				return;
			}
			result(null, res);
		});
	};

	fetch = (data, result) => {
		console.log("Fetching all restaurants");

		const query = `SELECT * FROM RESTAURANT;`;
		sql.query(query, (err, res) => {
			if (err) {
				console.error(err);
				result(err, null);
				return;
			}
			console.log("Fetched all restaurants!");

			return result(null, { data });
		});
	};
}
