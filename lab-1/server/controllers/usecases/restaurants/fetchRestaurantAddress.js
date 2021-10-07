import { DeserializeRequests } from "../DesrializeRequests.js";
import { RestaurantAddressTable } from "../../../models/Address.js";

export const fetchRestaurantAddress = async (req, res) => {
	console.log("Request fetched => ", req.params);
	const deserializeRequests = new DeserializeRequests();
	const fetchRestaurantMetaReqEntity =
		deserializeRequests.fetchRestaurantMeta(req);

	console.log(
		"Fetching restaurant address req => ",
		JSON.stringify(fetchRestaurantMetaReqEntity)
	);

	const restaurantAddressTable = new RestaurantAddressTable();
	restaurantAddressTable.fetchRestaurantAddress(
		fetchRestaurantMetaReqEntity,
		(err, data) => {
			if (err) {
				console.error(err);
				res.status(500).send("Error when fetching addresses!");
			} else {
				console.log("Fetched addresses => ", JSON.stringify(data));
				res.status(200).send(data);
			}
		}
	);
};
