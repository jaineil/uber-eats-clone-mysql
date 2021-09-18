import express from "express";
import bodyParser from "body-parser";
import { customerRoutes } from "./routes/customerRoutes.js";

const app = express();

app.use(express.json());
app.use(
	express.urlencoded({
		extended: false,
	})
);

app.use(customerRoutes);

const server = app.listen(3000, () => {
	console.log("Server listening on port 3000");
});
