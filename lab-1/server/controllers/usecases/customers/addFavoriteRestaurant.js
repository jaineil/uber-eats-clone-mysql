import { DeserializeRequests } from "../DesrializeRequests.js";
import { Favorites } from "../../../models/Favorites.js";

export const addFavortieRestaurant = (req, res) => {
	console.log(req.body);
	const deserializeRequests = new DeserializeRequests();
	const favoriteEntity = deserializeRequests.addToFavorite(req);

	console.log(
		"Entity to be inserted into the favorites table => ",
		JSON.stringify(favoriteEntity)
	);

	const favoritesTable = new Favorites();

	favoritesTable.addFavorite(favoriteEntity, (err, data) => {
		if (err) {
			console.error(err);
			res.status(500).send("Error when adding new favorite restaurant");
		} else {
			res.send(data);
		}
	});
};
