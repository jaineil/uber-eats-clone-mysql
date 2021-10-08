import { Order } from "../../../models/Order.js";
import { DeserializeRequests } from "../DesrializeRequests.js";

export const updateOrderStatus = async (req, res) => {
	console.log(
		`Incoming request for updating client order status => ${JSON.stringify(
			req.body
		)}`
	);
	const deserializeRequests = new DeserializeRequests();
	const updateOrderStatusReq = deserializeRequests.updateOrderStatus(req);
	console.log(JSON.stringify(updateOrderStatusReq));
	const orderTable = new Order();

	orderTable.updateOrderStatus(updateOrderStatusReq, (err, data) => {
		if (err) {
			console.error(err);
			res.status(500).send("Error when logging in customer");
		} else {
			console.log("Response => ", JSON.stringify(data));
			res.status(200).send(data);
		}
	});
};
