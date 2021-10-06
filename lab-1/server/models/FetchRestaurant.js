import { sql } from "./config/db.js";

export class FetchRestaurantTable {
	fetchAll = (result) => {
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

	fetch = (data, result) => {
		console.log("Filtering both - delivery type and dietary type");
		const query = ``;

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

	fetchByTypeOfDelivery = (data, result) => {
		console.log("Filtering by restaurant delivery type");

		const query = ``;

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

	fetchByDietaryType = (data, result) => {
		console.log("Filtering by dietary type");

		const query = ``;

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
