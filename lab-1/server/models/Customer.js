import { sql } from "./config/db.js";

export class CustomerTable {
	create = (data, result) => {
		const query = `INSERT INTO CUSTOMER 
							(USERNAME, FNAME, LNAME, DOB, CONTACT_NUMBER, EMAIL_ID, USER_PASSWORD) 
						VALUES 
							(
								"${data.username}", 
								"${data.firstName}", 
								"${data.lastName}", 
								"${data.dob}", 
								"${data.mobileNumber}",
								"${data.emailId}", 
								"${data.password}"
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