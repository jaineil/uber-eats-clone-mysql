import { CustomerEntity } from "../entities/CustomerEntity.js";

export class DeserializeRequests {
	customers = (req) => {
		// validate here

		return new CustomerEntity(
			req.body.username,
			req.body.firstName,
			req.body.lastName,
			req.body.dateOfBirth,
			req.body.emailId,
			req.body.mobileNumber
		);
	};
}
