import { FetchRestaurantTable } from "../../../models/FetchRestaurant";

export const fetchRestaurants = (req, res) => {
	console.log(req.params);
	const customerId = req.params.customerId;

	const fetchRestaurantTable = new FetchRestaurantTable();

	fetchRestaurantTable.fetchAllByCustomerLocation(
		{ customerId: customerId },
		(err, data) => {
			if (err) {
				console.error(err);
				res.status(500).send(
					"Error when fetching restaurants for customer location!"
				);
			} else {
				console.log(
					"Fetched restaurants sorted by customer location => ",
					JSON.stringify(data)
				);
				res.status(200).send(data);
			}
		}
	);
};
