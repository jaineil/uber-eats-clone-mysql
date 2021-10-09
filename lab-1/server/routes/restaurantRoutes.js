import express from "express";
import { createRestaurant } from "../controllers/usecases/restaurants/createRestaurantController.js";
import { fetchRestaurantAddress } from "../controllers/usecases/restaurants/fetchRestaurantAddress.js";
import { fetchRestaurantMeta } from "../controllers/usecases/restaurants/fetchRestaurantMeta.js";
import { fetchRestaurants } from "../controllers/usecases/restaurants/fetchRestaurantsController.js";
import { restaurantSignin } from "../controllers/usecases/restaurants/restaurantSigninController.js";
import { fetchOrders } from "../controllers/usecases/restaurants/fetchOrders.js";
import { updateOrderStatus } from "../controllers/usecases/restaurants/updateOrderStatus.js";
import { updateRestaurantDetails } from "../controllers/usecases/restaurants/updateRestaurantDetails.js";

export const restaurantRoutes = express.Router();
restaurantRoutes.post("/createRestaurant", createRestaurant);
restaurantRoutes.get("/filterRestaurants", fetchRestaurants);
restaurantRoutes.post("/restaurantSignin", restaurantSignin);
restaurantRoutes.get("/fetchRestaurantMeta/:restaurantId", fetchRestaurantMeta);
restaurantRoutes.get(
	"/fetchRestaurantAddress/:restaurantId",
	fetchRestaurantAddress
);
restaurantRoutes.get("/fetchCustomerOrders/:restaurantId", fetchOrders);
restaurantRoutes.post("/updateOrderStatus", updateOrderStatus);
restaurantRoutes.post("/updateRestaurant", updateRestaurantDetails);
