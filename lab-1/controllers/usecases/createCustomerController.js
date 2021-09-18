import { DeserializeRequests } from "./DesrializeRequests.js";
import { CustomerTable } from "../../models/Customer.js";

export const createCustomer = (req, res) => {
	console.log(req.body);
	const deserializeRequests = new DeserializeRequests();
	const customerEntity = deserializeRequests.customers(req);
	console.log(JSON.stringify(customerEntity));
	const customerObject = {
		username: customerEntity.username,
		firstName: customerEntity.firstName,
		lastName: customerEntity.lastName,
		dob: customerEntity.dateOfBirth,
		emailId: customerEntity.emailId,
		mobileNumber: customerEntity.mobileNumber,
	};

	console.log(JSON.stringify(customerObject));

	const customerTable = new CustomerTable();
	try {
		customerTable.create(customerObject, (err, data) => {
			if (err) {
				console.error(err);
				res.status(500).send("Error when creating customer");
			} else {
				res.send(data);
			}
		});
	} catch (err) {
		console.error(`Could not create new customer, ${err}`);
	}
};
