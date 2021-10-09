import express from "express";
import { customerSignin } from "../controllers/usecases/customers/customerSigninController.js";
import { createCustomer } from "../controllers/usecases/customers/createCustomerController.js";
import { fetchAllCustomerAddresses } from "../controllers/usecases/customers/fetchAllCustomerAddresses.js";
import { addCustomerAddress } from "../controllers/usecases/customers/addCustomerAddress.js";
import { placeOrder } from "../controllers/usecases/orders/placeOrder.js";
import { search } from "../controllers/usecases/customers/searchController.js";
import { fetchRestaurants } from "../controllers/usecases/restaurants/fetchRestaurantsController.js";
import { addFavortieRestaurant } from "../controllers/usecases/customers/addFavoriteRestaurant.js";
import { fetchFavorites } from "../controllers/usecases/customers/fetchFavorites.js";

export const customerRoutes = express.Router();

customerRoutes.post("/customerSignin", customerSignin);
customerRoutes.post("/createCustomer", createCustomer);
customerRoutes.get("/fetchAddresses", fetchAllCustomerAddresses);
customerRoutes.post("/addNewCustomerAddress", addCustomerAddress);
customerRoutes.post("/placeOrder", placeOrder);
customerRoutes.get("/search", search);
customerRoutes.get("/fetchRestaurants/:customerId", fetchRestaurants);
customerRoutes.post("/addFavorite", addFavortieRestaurant);
customerRoutes.get("/fetchFavorites/:customerId", fetchFavorites);
