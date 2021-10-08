import { sql } from "./config/db.js";

export class DishTable {
	create = (data, result) => {
		const query = `INSERT INTO ITEM 
							(RESTAURANT_ID, NAME, DESCRIPTION, PRICE, CATEGORY, FOOD_TYPE, INGREDIENTS, ITEM_IMAGE_URL) 
						VALUES 
							(
								"${data.restaurantId}", 
								"${data.name}", 
								"${data.description}", 
								"${data.price}", 
								"${data.category}",
								"${data.foodType}", 
								"${data.ingredients}",
                                "${data.dishImgUrl}"
						)`;

		sql.query(query, (err, res) => {
			if (err) {
				console.log(err);
				result(err, null);
				return;
			}
			console.log(
				`1 record inserted into ITEM table => ${JSON.stringify(res)}`
			);
			result(null, {
				dishId: res.insertId,
				...data,
			});
		});
	};

	fetchAllDishes = (data, result) => {
		const query = `SELECT * FROM ITEM WHERE RESTAURANT_ID=${data.restaurantId};`;
		sql.query(query, (err, res) => {
			if (err) {
				console.log(err);
				result(err, null);
				return;
			}
			result(null, res);
		});
	};

	fetchOneDish = (data, result) => {
		const query = `SELECT * FROM ITEM WHERE ID=${data.dishId};`;
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
