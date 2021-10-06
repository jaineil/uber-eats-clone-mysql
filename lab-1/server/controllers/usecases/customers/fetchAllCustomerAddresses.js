import { DeserializeRequests } from "../DesrializeRequests.js";
import { CustomerAddressTable } from "../../../models/Address.js";

export const fetchAllCustomerAddresses = async (req, res) => {
	const deserializeRequests = new DeserializeRequests();
	const fetchAllAddressesReqEntity =
		deserializeRequests.fetchAllCustomerAddresses(req);

	console.log(
		"Fetching all addresses for customer entity => ",
		JSON.stringify(fetchAllAddressesReqEntity)
	);

	const customerAddressTable = new CustomerAddressTable();

	customerAddressTable.fetchAllCustomerAddresses(
		fetchAllAddressesReqEntity,
		(err, data) => {
			if (err) {
				console.error(err);
				res.status(500).send("Error when fetching dishes!");
			} else {
				console.log("Fetched addresses => ", JSON.stringify(data));
				res.status(200).send(data);
			}
		}
	);
};
