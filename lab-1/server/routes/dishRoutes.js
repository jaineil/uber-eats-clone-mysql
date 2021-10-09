import express from "express";
import { createDish } from "../controllers/usecases/dishes/createDish.js";
import { fetchAllDishesController } from "../controllers/usecases/dishes/fetchAllDishesController.js";
import { fetchOneDishController } from "../controllers/usecases/dishes/fetchOneDishController.js";
import { updateDish } from "../controllers/usecases/dishes/updateDish.js";

export const dishRoutes = express.Router();
dishRoutes.post("/createDish", createDish);
dishRoutes.get("/fetchDishes/:restaurantId", fetchAllDishesController);
dishRoutes.get("/fetchOneDish/:dishId", fetchOneDishController);
dishRoutes.post("/updateOneDish", updateDish);
