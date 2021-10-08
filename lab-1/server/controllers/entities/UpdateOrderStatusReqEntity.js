export class UpdateOrderStatusReqEntity {
	constructor(orderId, status) {
		this.orderId = orderId;
		this.status = status;
	}
}
