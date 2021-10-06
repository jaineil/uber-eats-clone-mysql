import express from "express";
import { customerSignin } from "../controllers/usecases/customers/customerSigninController.js";
import { createCustomer } from "../controllers/usecases/customers/createCustomerController.js";
import { fetchAllCustomerAddresses } from "../controllers/usecases/customers/fetchAllCustomerAddresses.js";
import { addCustomerAddress } from "../controllers/usecases/customers/addCustomerAddress.js";
import { placeOrder } from "../controllers/usecases/orders/placeOrder.js";

export const customerRoutes = express.Router();

customerRoutes.post("/customerSignin", customerSignin);
customerRoutes.post("/createCustomer", createCustomer);
customerRoutes.get("/fetchAddresses", fetchAllCustomerAddresses);
customerRoutes.post("/addNewCustomerAddress", addCustomerAddress);
customerRoutes.post("/placeOrder", placeOrder);
