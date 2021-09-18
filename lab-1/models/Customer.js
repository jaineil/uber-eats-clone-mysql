import { sql } from "./config/db.js";

export class CustomerTable {
	create = (data, result) => {
		const query = `INSERT INTO CUSTOMER 
							(USERNAME, FNAME, LNAME, DOB, EMAIL_ID, CONTACT_NUMBER) 
						VALUES 
							(
								"${data.username}", 
								"${data.firstName}", 
								"${data.lastName}", 
								"${data.dob}", 
								"${data.emailId}", 
								"${data.mobileNumber}"
						)`;

		sql.query(query, (err, res) => {
			if (err) {
				console.log(err);
				result(err, null);
				return;
			}
			console.log(`1 record inserted => ${JSON.stringify(res)}`);
			result(null, {
				customerId: res.insertId,
				...data,
			});
		});
	};
}
