export class OrderEntity {
	constructor(restaurantId, customerId, time, amount, addressId, items) {
		this.restaurantId = restaurantId;
		this.customerId = customerId;
		this.time = time;
		this.amount = amount;
		this.addressId = addressId;
		this.items = items;
	}
}
