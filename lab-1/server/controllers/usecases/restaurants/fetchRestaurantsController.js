import { FetchRestaurantTable } from "../../../models/FetchRestaurant.js";
import { FetchRestaurantsEntity } from "../../entities/FetchRestaurantsEntity.js";
import { DeserializeRequests } from "../DesrializeRequests.js";

export const fetchRestaurants = (req, res) => {
	console.log(
		`Incoming request for inserting a restaurant => ${JSON.stringify(
			req.body
		)}`
	);

	const deserializeRequests = new DeserializeRequests();
	const filtersToFetchRestaurants = deserializeRequests.fetchRestaurants(req);

	const fetchRestaurantsTable = new FetchRestaurantTable();

	if (filtersToFetchRestaurants === false) {
		fetchRestaurantsTable.fetchAll((err, data) => {
			if (err) {
				console.error(err);
				res.status(500).send("Error when fetching restaurants");
			} else {
				console.log("Received response data => ", JSON.stringify(data));
				res.status(200).send(data);
			}
		});
	} else if (
		!filtersToFetchRestaurants.typeOfDeliveryFilter === "" &&
		!filtersToFetchRestaurants.dietaryFilter
	) {
		console.log(
			"Request entity => ",
			JSON.stringify(filtersToFetchRestaurants)
		);
		fetchRestaurantsTable.fetch(filtersToFetchRestaurants, (err, data) => {
			if (err) {
				console.error(err);
				res.status(500).send("Error when fetching restaurants");
			} else {
				console.log("Received response data => ", JSON.stringify(data));
				res.status(200).send(data);
			}
		});
	} else if (!filtersToFetchRestaurants.typeOfDeliveryFilter === "") {
		console.log(
			"Request entity => ",
			JSON.stringify(filtersToFetchRestaurants)
		);
		fetchRestaurantsTable.fetchByTypeOfDelivery(
			filtersToFetchRestaurants,
			(err, data) => {
				if (err) {
					console.error(err);
					res.status(500).send("Error when fetching restaurants");
				} else {
					console.log(
						"Received response data => ",
						JSON.stringify(data)
					);
					res.status(200).send(data);
				}
			}
		);
	} else {
		console.log(
			"Request entity => ",
			JSON.stringify(filtersToFetchRestaurants)
		);
		fetchRestaurantsTable.fetchByDietaryType(
			filtersToFetchRestaurants,
			(err, data) => {
				if (err) {
					console.error(err);
					res.status(500).send("Error when fetching restaurants");
				} else {
					console.log(
						"Received response data => ",
						JSON.stringify(data)
					);
					res.status(200).send(data);
				}
			}
		);
	}
};
