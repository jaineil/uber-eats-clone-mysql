import { DeserializeRequests } from "../DesrializeRequests.js";
import { RestaurantTable } from "../../../models/Restaurant.js";

export const restaurantSignin = async (req, res) => {
	const deserializeRequests = new DeserializeRequests();
	const restaurantCredentialsEntity =
		deserializeRequests.validateRestaurantCredentials(req);

	console.log(
		"Credentials entity => ",
		JSON.stringify(restaurantCredentialsEntity)
	);

	const restaurantTable = new RestaurantTable();
	restaurantTable.validateCredentials(
		restaurantCredentialsEntity,
		(err, data) => {
			if (err) {
				console.error(err);
				res.status(500).send("Error when logging in customer");
			} else {
				console.log("Response => ", JSON.stringify(data));

				if (!(data.fetchedPassword === data.password)) {
					res.status(400).send({ validCredentials: false, ...data });
				} else {
					res.cookie("restaurantId", data.restaurantId, {
						maxAge: 900000,
						httpOnly: false,
						path: "/",
					});
					req.session.user = data.restaurantId;

					res.status(200).send({
						validCredentialsdata: true,
						...data,
					});
				}
			}
		}
	);
};
