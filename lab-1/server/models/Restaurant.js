import { sql } from "./config/db.js";

export class RestaurantTable {
	create = (data, result) => {
		console.log(`About to insert data obj => ${JSON.stringify(data)}`);

		const query = `INSERT INTO RESTAURANT
                            (NAME, EMAIL_ID, USER_PASSWORD, DESCRIPTION, CUISINE, CONTACT_NUMBER, OPENS_AT, CLOSES_AT, PICKUP_OPTION, RESTAURANT_IMAGE_URL)
                        VALUES
                            (
                                "${data.name}", 
								"${data.emailId}",
								"${data.password}",
 								"${data.description}", 
								"${data.cuisine}", 
							    "${data.mobileNumber}", 
 								"${data.opensAt}", 
 								"${data.closesAt}",
                                ${data.pickupOption},
								"${data.restaurantImageUrl}"
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

	validateCredentials = (data, result) => {
		const query = `SELECT 
						USER_PASSWORD 
					FROM 
						RESTAURANT 
					WHERE 
						EMAIL_ID="${data.emailId}";`;

		sql.query(query, (err, res) => {
			if (err) {
				console.log(err);
				result(err, null);
				return;
			}
			console.log(`1 record fetched => ${JSON.stringify(res)}`);
			result(null, {
				fetchedPassword: res[0].USER_PASSWORD,
				...data,
			});
		});
	};

	fetchMeta = (data, result) => {
		const query = `SELECT * FROM RESTAURANT WHERE ID=${data.restaurantId};`;
		sql.query(query, (err, res) => {
			if (err) {
				console.log(err);
				result(err, null);
				return;
			}
			result(null, res);
		});
	};
}
