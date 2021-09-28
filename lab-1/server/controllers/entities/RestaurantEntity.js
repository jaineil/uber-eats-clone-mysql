export class RestaurantEntity {
	constructor(
		name,
		description,
		cuisine,
		mobileNumber,
		opensAt,
		closesAt,
		pickupOption
	) {
		this.name = name;
		this.description = description;
		this.cuisine = cuisine;
		this.mobileNumber = mobileNumber;
		this.opensAt = opensAt;
		this.closesAt = closesAt;
		this.pickupOption = pickupOption;
	}
}
