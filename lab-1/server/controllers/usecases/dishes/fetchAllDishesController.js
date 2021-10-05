import { DeserializeRequests } from "../DesrializeRequests.js";
import { DishTable } from "../../../models/DishTable.js";

export const fetchAllDishesController = async (req, res) => {
	console.log("Request fetched => ", req.query);
	const desrializeRequests = new DeserializeRequests();
	const fetchDishReqEntity = desrializeRequests.fetchAllDish(req);
	console.log(
		"Fetching all dishes for following restaurant req => ",
		JSON.stringify(fetchDishReqEntity)
	);

	const dishTable = new DishTable();
	dishTable.fetchAllDishes(fetchDishReqEntity, (err, data) => {
		if (err) {
			console.error(err);
			res.status(500).send("Error when fetching dishes!");
		} else {
			console.log("Fetched dishes => ", JSON.stringify(data));
			res.status(200).send(data);
		}
	});
};
