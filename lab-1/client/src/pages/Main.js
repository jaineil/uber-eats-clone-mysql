import React, { Component } from "react";
import { Route } from "react-router-dom";
import { CustomerSignup } from "./CustomerSignup/CustomerSignup.page";
import { CustomerSignin } from "./Login/CustomerSignin.page";
import { RestaurantSignup } from "./RestaurantSignup/RestaurantSignup.page";
import { RestaurantSignin } from "./Login/RestaurantLogin.page";
import { RestaurantDetails } from "./Ordering/RestaurantDetails.page";
import { TempDashboard } from "../components/Dashboard/TempDashboard";
import { OrderSummary } from "../components/Dashboard/OrderSummary";

//Main Component for routing all components
export default class Main extends Component {
	render() {
		return (
			<div>
				{/*Render Different Component based on Route*/}

				<Route path="/customerSignup" component={CustomerSignup} />
				<Route path="/restaurantSignup" component={RestaurantSignup} />
				<Route path="/customerSignin" component={CustomerSignin} />
				<Route path="/restaurantSignin" component={RestaurantSignin} />
				<Route path="/temp" component={TempDashboard} />
				<Route path="/chooseDish" component={RestaurantDetails} />
				<Route path="/order" component={OrderSummary} />
			</div>
		);
	}
}
