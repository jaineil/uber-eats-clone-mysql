import express from "express";
import { createCustomer } from "../controllers/usecases/createCustomerController.js";

export const customerRoutes = express.Router();
customerRoutes.post("/createCustomer", createCustomer);
