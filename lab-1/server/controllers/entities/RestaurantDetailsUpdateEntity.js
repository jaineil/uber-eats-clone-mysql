export class RestaurantDetailsUpdateEntity {
	constructor(
		name,
		emailId,
		description,
		cuisine,
		mobileNumber,
		opensAt,
		closesAt,
		pickupOption,
		veg,
		nonVeg,
		vegan,
		restaurantImageUrl,
		restaurantId
	) {
		this.name = name;
		this.emailId = emailId;
		this.description = description;
		this.cuisine = cuisine;
		this.mobileNumber = mobileNumber;
		this.opensAt = opensAt;
		this.closesAt = closesAt;
		this.pickupOption = pickupOption;
		this.veg = veg;
		this.nonVeg = nonVeg;
		this.vegan = vegan;
		this.restaurantImageUrl = restaurantImageUrl;
		this.restaurantId = restaurantId;
	}
}
