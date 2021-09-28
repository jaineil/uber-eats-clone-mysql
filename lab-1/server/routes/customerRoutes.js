import express from "express";
import { createCustomer } from "../controllers/usecases/customers/createCustomerController.js";

export const customerRoutes = express.Router();
customerRoutes.post("/createCustomer", createCustomer);
