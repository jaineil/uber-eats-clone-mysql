import { CustomerEntity } from "../entities/CustomerEntity.js";
import { CustomerCredentialsEntity } from "../entities/CustomerCredentialsEntity.js";
import { RestaurantCredentialsEntity } from "../entities/RestaurantCredentialsEntity.js";
import { RestaurantEntity } from "../entities/RestaurantEntity.js";
import { FetchRestaurantsEntity } from "../entities/FetchRestaurantsEntity.js";
import { FetchRestaurantMetaReqEntity } from "../entities/FetchRestaurantMetaReqEntity.js";
import { DishEntity } from "../entities/DishEntity.js";
import { FetchDishesReqEntity } from "../entities/FetchDishesReqEntity.js";
import { FetchAllCustomerAddressesReqEntity } from "../entities/FetchAllCustomerAddressesReqEntity.js";
import { CustomerNewAddressEntity } from "../entities/CustomerNewAddressEntity.js";
import { OrderEntity } from "../entities/OrderEntity.js";

export class DeserializeRequests {
	createCustomers = (req) => {
		// validate here

		return new CustomerEntity(
			req.body.username,
			req.body.firstName,
			req.body.lastName,
			req.body.dateOfBirth,
			req.body.mobileNumber,
			req.body.street,
			req.body.apt,
			req.body.city,
			req.body.state,
			req.body.zipcode,
			req.body.country,
			req.body.emailId,
			req.body.password
		);
	};

	validateCustomerCredentials = (req) => {
		// validate here

		return new CustomerCredentialsEntity(
			req.body.emailId,
			req.body.password
		);
	};

	validateRestaurantCredentials = (req) => {
		// validate here

		return new RestaurantCredentialsEntity(
			req.body.emailId,
			req.body.password
		);
	};

	createRestaurants = (req) => {
		// validate here

		return new RestaurantEntity(
			req.body.name,
			req.body.emailId,
			req.body.password,
			req.body.description,
			req.body.cuisine,
			req.body.mobileNumber,
			req.body.street,
			req.body.apt,
			req.body.city,
			req.body.state,
			req.body.zipcode,
			req.body.country,
			req.body.opensAt,
			req.body.closesAt,
			req.body.pickupOption,
			req.body.restaurantImageUrl
		);
	};

	fetchRestaurantMeta = (req) => {
		// validate here

		if (req.params) {
			return new FetchRestaurantMetaReqEntity(req.query.restaurantId);
		}
	};

	fetchRestaurants = (req) => {
		// validate here
		if (req.body) {
			return new FetchRestaurantsEntity(
				req.body.typeOfDeliveryFilter,
				req.body.dietaryFilter
			);
		} else {
			return false;
		}
	};

	createDish = (req) => {
		// validate here

		if (req.body) {
			return new DishEntity(
				req.body.name,
				req.body.description,
				req.body.price,
				req.body.category,
				req.body.foodType,
				req.body.ingredients,
				req.body.dishImgUrl,
				req.body.restaurantId
			);
		}
	};

	fetchAllDish = (req) => {
		// validate here

		if (req.params) {
			return new FetchDishesReqEntity(req.query.restaurantId);
		}
	};

	fetchAllCustomerAddresses = (req) => {
		// validate here

		if (req.params) {
			return new FetchAllCustomerAddressesReqEntity(req.query.customerId);
		}
	};

	addCustomerAddress = (req) => {
		// validate here

		if (req) {
			return new CustomerNewAddressEntity(
				req.body.customerId,
				req.body.street,
				req.body.apt,
				req.body.city,
				req.body.state,
				req.body.zipcode,
				req.body.country
			);
		}
	};

	createOrder = (req) => {
		// validate here

		if (req) {
			return new OrderEntity(
				req.body.restaurantId,
				req.body.customerId,
				req.body.time,
				req.body.amount,
				req.body.addressId,
				req.body.items
			);
		}
	};
}
