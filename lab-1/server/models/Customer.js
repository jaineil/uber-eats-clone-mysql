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
								"${data.dateOfBirth}", 
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

	validateCredentials = (data, result) => {
		const query = `SELECT 
						USER_PASSWORD 
					FROM 
						CUSTOMER 
					WHERE 
						EMAIL_ID="${data.emailId}";`;

		sql.query(query, (err, res) => {
			if (err) {
				console.log(err);
				result(err, null);
				return;
			}
			console.log(`1 record fetched => ${JSON.stringify(res)}`);
			result(null, {
				fetchedPassword: res[0].USER_PASSWORD,
				customerId: res[0].ID,
				...data,
			});
		});
	};
}
