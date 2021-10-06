import { DeserializeRequests } from "../DesrializeRequests.js";
import { CustomerTable } from "../../../models/Customer.js";
import { CustomerAddressTable } from "../../../models/Address.js";

export const createCustomer = (req, res) => {
	console.log(req.body);
	const deserializeRequests = new DeserializeRequests();
	const customerEntity = deserializeRequests.createCustomers(req);
	console.log("Created customer entity => ", JSON.stringify(customerEntity));

	const customerTable = new CustomerTable();
	const customerAddressTable = new CustomerAddressTable();

	customerTable.create(customerEntity, (err, data) => {
		if (err) {
			console.error(err);
			res.status(500).send("Error when creating customer");
		} else {
			const customerId = data.customerId;
			console.log("Created customer => ", customerId);
			const customerAddressObj = {
				customerId: customerId,
				addrApt: customerEntity.addrApt,
				addrStreet: customerEntity.addrStreet,
				addrCity: customerEntity.addrCity,
				addrState: customerEntity.addrState,
				addrCountry: customerEntity.addrCountry,
				addrZipcode: customerEntity.addrZipcode,
				addrType: "default",
			};
			customerAddressTable.create(customerAddressObj, (err, data) => {
				if (err) {
					console.error(err);
					res.status(500).send(
						"Error when creating customer address"
					);
				} else {
					res.send(data);
				}
			});
		}
	});
};
