import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import session from "express-session";
import { customerRoutes } from "./routes/customerRoutes.js";
import { restaurantRoutes } from "./routes/restaurantRoutes.js";
import { dishRoutes } from "./routes/dishRoutes.js";

const app = express();
app.use(cors({ origin: "http://localhost:3001", credentials: true }));
app.use(cookieParser());

app.use(
	session({
		secret: "cmpe273_lab",
		resave: false, // Forces the session to be saved back to the session store, even if the session was never modified during the request
		saveUninitialized: false, // Force to save uninitialized session to db. A session is uninitialized when it is new but not modified.
		duration: 60 * 60 * 1000, // Overall duration of Session : 30 minutes : 1800 seconds
		activeDuration: 5 * 60 * 1000,
	})
);

app.use(express.json());
app.use(
	express.urlencoded({
		extended: false,
	})
);

app.use((req, res, next) => {
	res.setHeader("Access-Control-Allow-Origin", "http://localhost:3001");
	res.setHeader("Access-Control-Allow-Credentials", "true");
	res.setHeader(
		"Access-Control-Allow-Methods",
		"GET,HEAD,OPTIONS,POST,PUT,DELETE"
	);
	res.setHeader(
		"Access-Control-Allow-Headers",
		"Access-Control-Allow-Headers, Origin, Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers"
	);
	res.setHeader("Cache-Control", "no-cache");
	next();
});

app.use(customerRoutes);
app.use(restaurantRoutes);
app.use(dishRoutes);

const server = app.listen(3000, () => {
	console.log("Server listening on port 3000");
});
