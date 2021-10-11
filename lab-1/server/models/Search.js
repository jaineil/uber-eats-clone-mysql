import { sql } from "./config/db.js";

export class Search {
	searching = (data, result) => {
		const query = `SELECT DISTINCT k.rest_name as NAME, k.ID, k.RESTAURANT_IMAGE_URL, k.OPENS_AT, k.CLOSES_AT, k.CITY,k.VEG,k.VEGAN,k.NON_VEG from (
						SELECT a.* FROM 
                        (SELECT DISTINCT r.NAME as rest_name, r.ID, i.NAME as dish_name, CUISINE, RESTAURANT_IMAGE_URL, OPENS_AT, CLOSES_AT, CITY,VEG,VEGAN,NON_VEG
                            FROM RESTAURANT r
                                INNER JOIN ITEM i
                                    ON r.ID = i.RESTAURANT_ID
                                INNER JOIN RESTAURANT_ADDRESS ra
                                    ON r.ID = ra.RESTAURANT_ID) a
                        WHERE a.rest_name like "%${data}%" or a.dish_name like "%${data}%" or a.CUISINE like "%${data}%" or a.CITY like "%${data}%") k;`;

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
