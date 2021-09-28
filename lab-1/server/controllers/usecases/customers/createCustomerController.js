import { DeserializeRequests } from "../DesrializeRequests.js";
import { CustomerTable } from "../../../models/Customer.js";

export const createCustomer = (req, res) => {
	console.log(req.body);
	const deserializeRequests = new DeserializeRequests();
	const customerEntity = deserializeRequests.createCustomers(req);
	console.log("ENTITY => ", JSON.stringify(customerEntity));
	const customerObject = {
		username: customerEntity.username,
		firstName: customerEntity.firstName,
		lastName: customerEntity.lastName,
		dob: customerEntity.dateOfBirth,
		mobileNumber: customerEntity.mobileNumber,
		emailId: customerEntity.emailId,
		password: customerEntity.password,
	};

	console.log("QUERY OBJECT => ", JSON.stringify(customerObject));

	const customerTable = new CustomerTable();

	customerTable.create(customerObject, (err, data) => {
		if (err) {
			console.error(err);
			res.status(500).send("Error when creating customer");
		} else {
			res.send(data);
		}
	});
};
