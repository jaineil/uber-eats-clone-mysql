import React, { Component } from "react";
import { Route } from "react-router-dom";
import { CustomerRegistration } from "./Registration/CustomerRegistration";

//Main Component for routing all components
export default class Main extends Component {
	render() {
		return (
			<div>
				{/*Render Different Component based on Route*/}
				<Route path="/registration" component={CustomerRegistration} />
			</div>
		);
	}
}
