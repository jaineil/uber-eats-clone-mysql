export class RestaurantEntity {
	constructor(
		name,
		emailId,
		password,
		description,
		cuisine,
		mobileNumber,
		addrStreet,
		addrApt,
		addrCity,
		addrState,
		addrZipcode,
		addrCountry,
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
		this.addrStreet = addrStreet;
		this.addrApt = addrApt;
		this.addrCity = addrCity;
		this.addrState = addrState;
		this.addrZipcode = addrZipcode;
		this.addrCountry = addrCountry;
		this.opensAt = opensAt;
		this.closesAt = closesAt;
		this.pickupOption = pickupOption;
		this.restaurantImageUrl = restaurantImageUrl;
	}
}
