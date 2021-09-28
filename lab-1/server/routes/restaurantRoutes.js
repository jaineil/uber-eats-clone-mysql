import express from "express";
import { createRestaurant } from "../controllers/usecases/restaurants/createRestaurantController.js";

export const restaurantRoutes = express.Router();
restaurantRoutes.post("/createRestaurant", createRestaurant);
