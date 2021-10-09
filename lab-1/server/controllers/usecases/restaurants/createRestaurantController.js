import { RestaurantAddressTable } from "../../../models/Address.js";
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
	const restaurantAddressTable = new RestaurantAddressTable();

	restaurantTable.create(restaurantEntity, (err, data) => {
		if (err) {
			console.error(err);
			res.status(500).send("Error when creating a restaurant");
		} else {
			const restaurantId = data.restaurantId;
			console.log("Created restaurant => ", restaurantId);
			const restaurantAddressObj = {
				restaurantId: restaurantId,
				addrApt: restaurantEntity.addrApt,
				addrStreet: restaurantEntity.addrStreet,
				addrCity: restaurantEntity.addrCity,
				addrState: restaurantEntity.addrState,
				addrCountry: restaurantEntity.addrCountry,
				addrZipcode: restaurantEntity.addrZipcode,
			};

			restaurantAddressTable.create(restaurantAddressObj, (err, data) => {
				if (err) {
					console.error(err);
					res.status(500).send(
						"Error when creating customer address"
					);
				} else {
					res.send(data);
				}
			});
		}
	});
};
