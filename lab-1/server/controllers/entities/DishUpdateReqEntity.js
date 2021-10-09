export class DishUpdateReqEntity {
	constructor(
		name,
		description,
		price,
		ingredients,
		category,
		dishImageUrl,
		mealId
	) {
		this.name = name;
		this.description = description;
		this.price = price;
		this.category = category;
		this.ingredients = ingredients;
		this.dishImageUrl = dishImageUrl;
		this.mealId = mealId;
	}
}
