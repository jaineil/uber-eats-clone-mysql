import { Order } from "../../../models/Order.js";
import { DeserializeRequests } from "../DesrializeRequests.js";

export const placeOrder = async (req, res) => {
	console.log(req.body);
	const deserializeRequests = new DeserializeRequests();
	const orderEntity = deserializeRequests.createOrder(req);
	console.log("Created order entity => ", JSON.stringify(orderEntity));

	const orderTable = new Order();

	orderTable.create(
		{ status: "ORDER_PLACED", ...orderEntity },
		(err, data) => {
			if (err) {
				console.error(err);
				res.status(500).send("Error when creating order");
			} else {
				const orderId = data.orderId;
				console.log("Created order => ", orderId);

				const orderItems = orderEntity.items;

				orderTable.createOrderItems(
					{ orderId: orderId, orderItems },
					(err, data) => {
						if (err) {
							console.error(err);
							res.status(500).send(
								"Error when adding order items"
							);
						} else {
							res.send("Done!");
						}
					}
				);
			}
		}
	);
};
