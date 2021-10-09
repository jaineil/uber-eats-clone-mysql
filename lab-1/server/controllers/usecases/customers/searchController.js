import { Search } from "../../../models/Search.js";

export const search = async (req, res) => {
	console.log("Search incoming request (query) => ", req.query);
	console.log("Search incoming request (params) => ", req.query);

	const searchString = req.query.searchString; // send searchString in params from React

	const search = new Search();

	if (
		searchString == "pick up" ||
		searchString == "Pick up" ||
		searchString == "Pick Up" ||
		searchString == "pickup" ||
		searchString == "Pickup"
	) {
		search.deliveryModeSearch({ pickup: true }, (err, data) => {
			if (err) {
				console.error(err);
				res.status(500).send("Error when searching!");
			} else {
				console.log("Fetched searches => ", JSON.stringify(data));
				res.status(200).send(data);
			}
		});
	}

	search.searching(searchString, (err, data) => {
		if (err) {
			console.error(err);
			res.status(500).send("Error when searching!");
		} else {
			console.log("Fetched searches => ", JSON.stringify(data));
			res.status(200).send(data);
		}
	});
};
