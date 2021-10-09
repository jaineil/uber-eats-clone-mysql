import { CustomerOrders } from "../../../models/CustomerOrders";

export const fetchOrderHistory = (req, res) => {
	console.log(req.params);
	const customerId = req.params.customerId;

	const customerOrders = new CustomerOrders();

	customerOrders.fetch({ customerId: customerId }, (err, data) => {
		if (err) {
			console.error(err);
			res.status(500).send("Error when fetching order history for user");
		} else {
			res.status(200).send(data);
		}
	});
};
