// import { cookieParser } from "cookie-parser";
import { DeserializeRequests } from "../DesrializeRequests.js";
import { CustomerTable } from "../../../models/Customer.js";

export const customerSignin = async (req, res) => {
	const deserializeRequests = new DeserializeRequests();
	const customerCredentialsEntity =
		deserializeRequests.validateCustomerCredentials(req);

	console.log(
		"Credentials entity => ",
		JSON.stringify(customerCredentialsEntity)
	);

	const customerTable = new CustomerTable();
	customerTable.validateCredentials(
		customerCredentialsEntity,
		(err, data) => {
			if (err) {
				console.error(err);
				res.status(500).send("Error when logging in customer");
			} else {
				console.log("Response => ", JSON.stringify(data));

				if (!(data.fetchedPassword === data.password)) {
					res.status(400).send({ validCredentials: false, ...data });
				} else {
					res.cookie("cookie", data.emailId, {
						maxAge: 900000,
						httpOnly: false,
						path: "/",
					});
					req.session.user = data.emailId;

					res.status(200).send({
						validCredentialsdata: true,
						...data,
					});
					// res.send("Successful login!");
				}
			}
		}
	);
};
