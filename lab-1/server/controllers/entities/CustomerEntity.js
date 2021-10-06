export class CustomerEntity {
	constructor(
		username,
		firstName,
		lastName,
		dateOfBirth,
		mobileNumber,
		addrStreet,
		addrApt,
		addrCity,
		addrState,
		addrZipcode,
		addrCountry,
		emailId,
		password
	) {
		this.username = username;
		this.firstName = firstName;
		this.lastName = lastName;
		this.dateOfBirth = dateOfBirth;
		this.mobileNumber = mobileNumber;
		this.addrStreet = addrStreet;
		this.addrApt = addrApt;
		this.addrCity = addrCity;
		this.addrState = addrState;
		this.addrZipcode = addrZipcode;
		this.addrCountry = addrCountry;
		this.emailId = emailId;
		this.password = password;
	}
}
