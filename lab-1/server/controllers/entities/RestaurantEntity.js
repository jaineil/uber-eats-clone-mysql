export class RestaurantEntity {
	constructor(
		name,
		emailId,
		password,
		description,
		cuisine,
		mobileNumber,
		opensAt,
		closesAt,
		pickupOption,
		restaurantImageUrl
	) {
		this.name = name;
		this.emailId = emailId;
		this.password = password;
		this.description = description;
		this.cuisine = cuisine;
		this.mobileNumber = mobileNumber;
		this.opensAt = opensAt;
		this.closesAt = closesAt;
		this.pickupOption = pickupOption;
		this.restaurantImageUrl = restaurantImageUrl;
	}
}
