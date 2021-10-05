import express from "express";
import { customerSignin } from "../controllers/usecases/customers/customerSigninController.js";
import { createCustomer } from "../controllers/usecases/customers/createCustomerController.js";

export const customerRoutes = express.Router();
customerRoutes.post("/customerSignin", customerSignin);
customerRoutes.post("/createCustomer", createCustomer);
