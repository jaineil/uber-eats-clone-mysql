export class CustomerNewAddressEntity {
	constructor(
		customerId,
		addrStreet,
		addrApt,
		addrCity,
		addrState,
		addrZipcode,
		addrCountry
	) {
		this.customerId = customerId;
		this.addrStreet = addrStreet;
		this.addrApt = addrApt;
		this.addrCity = addrCity;
		this.addrState = addrState;
		this.addrZipcode = addrZipcode;
		this.addrCountry = addrCountry;
	}
}
