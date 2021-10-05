export class DishEntity {
	constructor(
		name,
		description,
		price,
		category,
		foodType,
		ingredients,
		dishImgUrl,
		restaurantId
	) {
		this.name = name;
		this.description = description;
		this.price = price;
		this.category = category;
		this.foodType = foodType;
		this.ingredients = ingredients;
		this.dishImgUrl = dishImgUrl;
		this.restaurantId = restaurantId;
	}
}
