import { RestaurantTable } from "../../../models/Restaurant.js";
import { DeserializeRequests } from "../DesrializeRequests.js";

export const createRestaurant = (req, res) => {
	console.log(
		`Incoming request for inserting a restaurant => ${JSON.stringify(
			req.body
		)}`
	);

	const deserializeRequests = new DeserializeRequests();
	const restaurantEntity = deserializeRequests.createRestaurants(req);

	console.log(JSON.stringify(restaurantEntity));

	const restaurantTable = new RestaurantTable();

	restaurantTable.create(restaurantEntity, (err, data) => {
		if (err) {
			console.error(err);
			res.status(500).send("Error when creating a restaurant");
		} else {
			res.send(data);
		}
	});
};
