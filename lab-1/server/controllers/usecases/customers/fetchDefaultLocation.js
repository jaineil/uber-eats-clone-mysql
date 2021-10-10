import { DeserializeRequests } from "../DesrializeRequests.js";
import { CustomerAddressTable } from "../../../models/Address.js";

export const fetchDefaultLocation = async (req, res) => {
	const deserializeRequests = new DeserializeRequests();
	const fetchAllAddressesReqEntity =
		deserializeRequests.fetchAllCustomerAddresses(req);

	console.log(
		"Fetching default addresses for customer entity => ",
		JSON.stringify(fetchAllAddressesReqEntity)
	);

	const customerAddressTable = new CustomerAddressTable();
	customerAddressTable.fetchCustomerDefaultAddress(
		fetchAllAddressesReqEntity,
		(err, data) => {
			if (err) {
				console.error(err);
				res.status(500).send("Error when fetching default address!");
			} else {
				console.log("Fetched address => ", JSON.stringify(data));
				res.status(200).send(data);
			}
		}
	);
};
