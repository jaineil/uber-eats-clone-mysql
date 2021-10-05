import express from "express";
import { createRestaurant } from "../controllers/usecases/restaurants/createRestaurantController.js";
import { fetchRestaurantMeta } from "../controllers/usecases/restaurants/fetchRestaurantMeta.js";
import { fetchRestaurants } from "../controllers/usecases/restaurants/fetchRestaurantsController.js";
import { restaurantSignin } from "../controllers/usecases/restaurants/restaurantSigninController.js";

export const restaurantRoutes = express.Router();
restaurantRoutes.post("/createRestaurant", createRestaurant);
restaurantRoutes.get("/filterRestaurants", fetchRestaurants);
restaurantRoutes.post("/restaurantSignin", restaurantSignin);
restaurantRoutes.get("/fetchRestaurantMeta", fetchRestaurantMeta);
