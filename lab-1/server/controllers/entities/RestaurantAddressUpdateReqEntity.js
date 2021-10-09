export class RestaurantAddressUpdateReqEntity {
	constructor(street, city, state, apt, zipcode, restaurantId) {
		this.street = street;
		this.city = city;
		this.state = state;
		this.apt = apt;
		this.zipcode = zipcode;
		this.restaurantId = restaurantId;
	}
}
