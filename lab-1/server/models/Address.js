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
}