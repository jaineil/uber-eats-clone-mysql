import { DeserializeRequests } from "../DesrializeRequests.js";
import { DishTable } from "../../../models/DishTable.js";

export const createDish = (req, res) => {
	console.log(req.body);
	const deserializeRequests = new DeserializeRequests();
	const dishEntity = deserializeRequests.createDish(req);
	console.log("Created dish entity => ", JSON.stringify(dishEntity));

	const dishTable = new DishTable();
	dishTable.create(dishEntity, (err, data) => {
		if (err) {
			console.error(err);
			res.status(500).send("Error when creating customer");
		} else {
			res.status(200).send(data);
		}
	});
};
