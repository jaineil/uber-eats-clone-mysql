import { createGETRequest } from "./createRequests.js";
import chai from "chai";

const assert = chai.assert;

describe("#testGetFavoritesAPI", () => {
	it("Should return the correct customers details", async () => {
		const response = await createGETRequest(
			"http://localhost:3000/fetchFavorites/6"
		);

		assert.strictEqual(typeof response, "object");
	});
});

describe("#testGetRestaurantsApi", () => {
	it("Should return the correct customers details", async () => {
		const response = await createGETRequest(
			"http://localhost:3000/fetchRestaurants/6"
		);
		assert.strictEqual(typeof response, "object");
	});
});

describe("#fetchOrderHistory", () => {
	it("Should return the correct customers details", async () => {
		const response = await createGETRequest(
			"http://localhost:3000/fetchOrderHistory/6"
		);
		assert.isObject(response);
		assert.strictEqual(typeof response, "object");
	});
});

describe("#fetchRestaurantMeta", () => {
	it("Should return the correct customers details", async () => {
		const response = await createGETRequest(
			"http://localhost:3000/fetchRestaurants/6"
		);
		assert.isObject(response);
		assert.strictEqual(typeof response, "object");
	});
});

describe("#fetchCustomerLocation", () => {
	it("Should return the correct customers details", async () => {
		const response = await createGETRequest(
			"http://localhost:3000/fetchCustomerLocation/6"
		);
		assert.isObject(response);
		assert.strictEqual(typeof response, "object");
	});
});
