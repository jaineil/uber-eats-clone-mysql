import { DeserializeRequests } from "../DesrializeRequests.js";
import { Order } from "../../../models/Order.js";

export const fetchOrders = async (req, res) => {
	console.log("Request fetched => ", req.params);
	const deserializeRequests = new DeserializeRequests();
	const fetchRestaurantMetaReqEntity =
		deserializeRequests.fetchRestaurantMeta(req);

	console.log(
		"Fetching restaurant address req => ",
		JSON.stringify(fetchRestaurantMetaReqEntity)
	);

	const orderTable = new Order();
	orderTable.fetchAll(fetchRestaurantMetaReqEntity, (err, data) => {
		if (err) {
			console.error(err);
			res.status(500).send("Error when fetching orders!");
		} else {
			let output = [];
			console.log("Fetched orders => ", JSON.stringify(data));
			res.status(200).send(data);
		}
	});
};
