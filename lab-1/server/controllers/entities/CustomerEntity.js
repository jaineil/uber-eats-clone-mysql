export class CustomerEntity {
	constructor(
		username,
		firstName,
		lastName,
		dateOfBirth,
		mobileNumber,
		emailId,
		password
	) {
		this.username = username;
		this.firstName = firstName;
		this.lastName = lastName;
		this.dateOfBirth = dateOfBirth;
		this.mobileNumber = mobileNumber;
		this.emailId = emailId;
		this.password = password;
	}
}
