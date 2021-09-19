import { sql } from "./config/db.js";

export class RestaurantTable {
	create = (data, result) => {
		console.log(`About to insert data obj => ${JSON.stringify(data)}`);

		const query = `INSERT INTO RESTAURANT
                            (NAME, DESCRIPTION, CUISINE, CONTACT_NUMBER, OPENS_AT, CLOSES_AT, PICKUP_OPTION)
                        VALUES
                            (
                                "${data.name}", 
 								"${data.description}", 
								"${data.cuisine}", 
							    "${data.mobileNumber}", 
 								"${data.opensAt}", 
 								"${data.closesAt}",
                                ${data.pickupOption}
                            )`;

		sql.query(query, (err, res) => {
			if (err) {
				console.log(err);
				result(err, null);
				return;
			}

			console.log(
				`1 record of restaurant added => ${JSON.stringify(res)}`
			);

			result(null, {
				restaurantId: res.insertId,
				...data,
			});
		});
	};
}
