import { CustomerEntity } from "../entities/CustomerEntity.js";
import { RestaurantEntity } from "../entities/RestaurantEntity.js";

export class DeserializeRequests {
	createCustomers = (req) => {
		// validate here

		return new CustomerEntity(
			req.body.username,
			req.body.firstName,
			req.body.lastName,
			req.body.dateOfBirth,
			req.body.mobileNumber,
			req.body.emailId,
			req.body.password
		);
	};

	createRestaurants = (req) => {
		// validate here

		return new RestaurantEntity(
			req.body.name,
			req.body.description,
			req.body.cuisine,
			req.body.mobileNumber,
			req.body.opensAt,
			req.body.closesAt,
			req.body.pickupOption
		);
	};
}
