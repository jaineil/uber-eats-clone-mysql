import React, { useState } from "react";
import Axios from "axios";

export const RestaurantRegistration = (props) => {
	// console.log(JSON.stringify(props));

	const [name, setName] = useState("");
	const [description, setDescription] = useState("");
	const [cuisine, setCuisine] = useState("");
	const [mobileNumber, setMobileNumber] = useState("");
	const [opensAt, setOpensAt] = useState("");
	const [closesAt, setClosesAt] = useState("");
	const [pickupOption, setPickupOption] = useState(false);

	const createAccount = async (e) => {
		e.preventDefault();
		let pickupOptionStatus;

		pickupOption === "on"
			? (pickupOptionStatus = true)
			: (pickupOptionStatus = false);

		const payload = {
			name: name,
			description: description,
			cuisine: cuisine,
			mobileNumber: String(mobileNumber),
			opensAt: opensAt,
			closesAt: closesAt,
			pickupOption: pickupOptionStatus,
		};

		console.log("Created payload => ", JSON.stringify(payload));

		try {
			const response = await Axios.post(
				"http://localhost:3000/createRestaurant",
				payload
			);
			console.log(
				"Successfully registered => ",
				JSON.stringify(response.data)
			);
		} catch (err) {
			console.error("Error when registering new restaurant => ", err);
		}
	};

	return (
		<div className="cover-user">
			<div className="detail">
				<h2>Let's setup your account!</h2>
				<h6>
					Already have an account?{" "}
					<button>
						<a href="/userSignIn">Login</a>
					</button>
				</h6>
			</div>

			<form className="form-restaurant-signup" onSubmit={createAccount}>
				<h2 className="logo">
					<span id="one">Uber</span>
					<span id="two">Eats</span>
				</h2>

				<label htmlFor="name">Restaurant Name </label>
				<input
					type="text"
					name="name"
					onChange={(e) => {
						setName(e.target.value);
					}}
					placeholder="eg. Nick the Greek"
					required
				/>

				<label htmlFor="Description">Description </label>
				<textarea
					textarea
					id="description"
					name="description"
					rows="5"
					cols="33"
					onChange={(e) => {
						setDescription(e.target.value);
					}}
					placeholder="Write your description here"
					required
				/>

				<label htmlFor="cuisine">Cuisine </label>
				<input
					type="text"
					name="cuisine"
					onChange={(e) => {
						setCuisine(e.target.value);
					}}
					placeholder="eg. Greek"
					required
				/>

				<label htmlFor="mobileNumber">Mobile Number </label>
				<input
					type="tel"
					name="mobileNumber"
					onChange={(e) => {
						setMobileNumber(e.target.value);
					}}
					//pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
					required
				/>

				<label htmlFor="cuisine">Opens At </label>
				<input
					type="time"
					name="cuisine"
					onChange={(e) => {
						setOpensAt(e.target.value);
					}}
					// placeholder="eg. 11:00 AM"
					required
				/>

				<label htmlFor="closesAt">Closes At </label>
				<input
					type="time"
					name="closesAt"
					onChange={(e) => {
						setClosesAt(e.target.value);
					}}
					// placeholder="eg. 11:00 AM"
					required
				/>

				<label htmlFor="pickupOption">Pickup </label>
				<input
					type="checkbox"
					name="pickupOption"
					onChange={(e) => {
						setPickupOption(e.target.value);
					}}
					// placeholder="eg. 11:00 AM"
					required
				/>

				<button type="submit">Create Account</button>
			</form>
		</div>
	);
};
