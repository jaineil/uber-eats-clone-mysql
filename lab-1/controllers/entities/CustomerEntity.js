export class CustomerEntity {
	constructor(
		username,
		firstName,
		lastName,
		dateOfBirth,
		emailId,
		mobileNumber
	) {
		this.username = username;
		this.firstName = firstName;
		this.lastName = lastName;
		this.dateOfBirth = dateOfBirth;
		this.emailId = emailId;
		this.mobileNumber = mobileNumber;
	}
}
