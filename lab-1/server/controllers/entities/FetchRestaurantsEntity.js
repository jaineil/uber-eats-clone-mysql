export class FetchRestaurantsEntity {
	constructor(typeOfDeliveryFilter = "", dietaryFilter = "") {
		this.typeOfDeliveryFilter = typeOfDeliveryFilter;
		this.dietaryFilter = dietaryFilter;
	}
}
