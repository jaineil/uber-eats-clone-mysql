import { RestaurantAddressTable } from "../../../models/Address.js";
import { RestaurantTable } from "../../../models/Restaurant.js";
import { DeserializeRequests } from "../DesrializeRequests.js";

export const updateRestaurantDetails = (req, res) => {
	console.log(
		`Incoming request for inserting a restaurant => ${JSON.stringify(
			req.body
		)}`
	);

	const deserializeRequests = new DeserializeRequests();
	const restaurantEntity = deserializeRequests.updateRestaurantDetails(req);
	const restaurantAddressEntity =
		deserializeRequests.updateRestaurantAddressDetails(req);
	console.log(JSON.stringify(restaurantEntity));
	console.log(JSON.stringify(restaurantAddressEntity));

	const restaurantTable = new RestaurantTable();
	const restaurantAddressTable = new RestaurantAddressTable();

	restaurantTable.update(restaurantEntity, (err, data) => {
		if (err) {
			console.error(err);
			res.status(500).send("Error when creating a restaurant");
		} else {
			const restaurantId = data.restaurantId;
			console.log("Updated restaurant!", data);

			restaurantAddressTable.update(
				restaurantAddressEntity,
				(err, data) => {
					if (err) {
						console.error(err);
						res.status(500).send(
							"Error when creating customer address"
						);
					} else {
						res.send(data);
					}
				}
			);
		}
	});
};
