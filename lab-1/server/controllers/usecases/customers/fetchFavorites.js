import { Favorites } from "../../../models/Favorites.js";

export const fetchFavorites = (req, res) => {
	console.log(req.params);
	const customerId = req.params.customerId;

	const favorites = new Favorites();

	favorites.fetchFavorites({ customerId }, (err, data) => {
		if (err) {
			console.error(err);
			res.status(500).send("Error when fetching favorite restaurants");
		} else {
			res.send(data);
		}
	});
};
