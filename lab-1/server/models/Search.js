import { sql } from "./config/db.js";

export class Search {
	searching = (data, result) => {
		const query = `SELECT a.* FROM 
                        (SELECT DISTINCT r.NAME as rest_name, i.NAME as dish_name, CUISINE, RESTAURANT_IMAGE_URL, OPENS_AT, CLOSES_AT, CITY
                            FROM RESTAURANT r
                                INNER JOIN ITEM i
                                    ON r.ID = i.RESTAURANT_ID
                                INNER JOIN RESTAURANT_ADDRESS ra
                                    ON r.ID = ra.RESTAURANT_ID) a
                        WHERE a.rest_name like "%${data}%" or a.dish_name like "%${data}%" or a.CUISINE like "%${data}%" or a.CITY like "%${data}%"`;

		sql.query(query, (err, res) => {
			if (err) {
				console.log(err);
				result(err, null);
				return;
			}
			result(null, res);
		});
	};

	deliveryModeSearch = (data, result) => {
		const query = `SELECT * FROM RESTAURANT WHERE PICKUP_OPTION=${data.pickup};`;

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
