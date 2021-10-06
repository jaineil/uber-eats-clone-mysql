import { DeserializeRequests } from "../DesrializeRequests.js";
import { CustomerAddressTable } from "../../../models/Address.js";

export const addCustomerAddress = (req, res) => {
	console.log(req.body);
	const deserializeRequests = new DeserializeRequests();
	const customerAlternateAddressEntity =
		deserializeRequests.addCustomerAddress(req);
	console.log(
		"Created new customer address entity => ",
		JSON.stringify(customerAlternateAddressEntity)
	);

	const customerAddressTable = new CustomerAddressTable();

	customerAddressTable.create(
		{ addrType: "alternate", ...customerAlternateAddressEntity },
		(err, data) => {
			if (err) {
				console.error(err);
				res.status(500).send(
					"Error when creating alternate customer address"
				);
			} else {
				res.status(200).send(data);
			}
		}
	);
};
