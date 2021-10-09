import { DeserializeRequests } from "../DesrializeRequests.js";
import { DishTable } from "../../../models/DishTable.js";

export const updateDish = (req, res) => {
	console.log(req.body);
	const deserializeRequests = new DeserializeRequests();
	const dishEntity = deserializeRequests.updateDish(req);
	console.log("Update dish entity => ", JSON.stringify(dishEntity));
	console.log("TYPE => ", dishEntity.dishImageUrl);
	const dishTable = new DishTable();
	dishTable.update(dishEntity, (err, data) => {
		if (err) {
			console.error(err);
			res.status(500).send("Error when updating dish");
		} else {
			console.log("Updated dish! => ", data);
			res.status(200).send(data);
		}
	});
};
