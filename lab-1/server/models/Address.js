import { sql } from "./config/db.js";

export class CustomerAddressTable {
	create = (data, result) => {
		const query = `INSERT INTO CUSTOMER_ADDRESS 
							(CUSTOMER_ID, HOUSE_NUMBER, STREET, CITY, STATE, COUNTRY, PINCODE, ADDRESS_TYPE) 
						VALUES 
							(
								"${data.customerId}", 
								"${data.addrApt}", 
								"${data.addrStreet}", 
								"${data.addrCity}", 
								"${data.addrState}",
								"${data.addrCountry}", 
								"${data.addrZipcode}",
                                "${data.addrType}"
						)`;

		sql.query(query, (err, res) => {
			if (err) {
				console.log(err);
				result(err, null);
				return;
			}
			console.log(`1 record inserted => ${JSON.stringify(res)}`);
			result(null, {
				customerAddressId: res.insertId,
				...data,
			});
		});
	};

	fetchAllCustomerAddresses = (data, result) => {
		const query = `SELECT * FROM CUSTOMER_ADDRESS WHERE CUSTOMER_ID=${data.customerId};`;
		sql.query(query, (err, res) => {
			if (err) {
				console.log(err);
				result(err, null);
				return;
			}
			result(null, res);
		});
	};
}

export class RestaurantAddressTable {
	create = (data, result) => {
		const query = `INSERT INTO RESTAURANT_ADDRESS 
							(RESTAURANT_ID, HOUSE_NUMBER, STREET, CITY, STATE, COUNTRY, PINCODE) 
						VALUES 
							(
								"${data.restaurantId}", 
								"${data.addrApt}", 
								"${data.addrStreet}", 
								"${data.addrCity}", 
								"${data.addrState}",
								"${data.addrCountry}", 
								"${data.addrZipcode}"
						)`;

		sql.query(query, (err, res) => {
			if (err) {
				console.log(err);
				result(err, null);
				return;
			}
			console.log(`1 record inserted => ${JSON.stringify(res)}`);
			result(null, {
				restaurantAddressId: res.insertId,
				...data,
			});
		});
	};

	update = (data, result) => {
		const query = `UPDATE RESTAURANT_ADDRESS
						SET STREET="${data.street}",
							CITY="${data.city}",
							STATE="${data.state}",
							HOUSE_NUMBER="${data.apt}",
							PINCODE="${data.zipcode}"
					WHERE RESTAURANT_ID=${data.restaurantId};`;

		sql.query(query, (err, res) => {
			if (err) {
				console.log(err);
				result(err, null);
				return;
			}

			console.log(
				`1 record of restaurant address updated => ${JSON.stringify(
					res
				)}`
			);

			result(null, data);
		});
	};

	fetchRestaurantAddress = (data, result) => {
		const query = `SELECT * FROM RESTAURANT_ADDRESS WHERE RESTAURANT_ID=${data.restaurantId};`;
		sql.query(query, (err, res) => {
			if (err) {
				console.log(err);
				result(err, null);
				return;
			}
			result(null, res);
		});
	};
}
