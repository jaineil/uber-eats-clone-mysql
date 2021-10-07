import { DeserializeRequests } from "../DesrializeRequests.js";
import { RestaurantTable } from "../../../models/Restaurant.js";

export const fetchRestaurantMeta = async (req, res) => {
	console.log("Request fetched => ", req.params);
	const deserializeRequests = new DeserializeRequests();
	const fetchRestaurantMetaReqEntity =
		deserializeRequests.fetchRestaurantMeta(req);
	console.log(
		"Fetching restaurant meta req => ",
		JSON.stringify(fetchRestaurantMetaReqEntity)
	);

	const restaurantTable = new RestaurantTable();
	restaurantTable.fetchMeta(fetchRestaurantMetaReqEntity, (err, data) => {
		if (err) {
			console.error(err);
			res.status(500).send("Error when fetching dishes!");
		} else {
			console.log("Fetched restaurant meta => ", JSON.stringify(data));
			res.status(200).send(data);
		}
	});
};
