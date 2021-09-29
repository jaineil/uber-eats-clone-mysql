import React, { Component } from "react";
import { Route } from "react-router-dom";
import { CustomerRegistration } from "./Registration/CustomerRegistration";
import { RestaurantRegistration } from "./Registration/RestaurantRegistration";

//Main Component for routing all components
export default class Main extends Component {
	render() {
		return (
			<div>
				{/*Render Different Component based on Route*/}
				<Route
					path="/customerRegistration"
					component={CustomerRegistration}
				/>
				<Route
					path="/restaurantRegistration"
					component={RestaurantRegistration}
				/>
			</div>
		);
	}
}
