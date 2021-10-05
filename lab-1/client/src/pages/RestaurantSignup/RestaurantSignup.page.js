import React from "react";
import { Jumbotron } from "react-bootstrap";
import { RestaurantRegistration } from "../../components/Registration/RestaurantRegistration";
import "./RestaurantSignup.style.css";

export const RestaurantSignup = () => {
	return (
		<div className="registration-page">
			<div className>
				<Jumbotron fluid className="form-box">
					<RestaurantRegistration />
				</Jumbotron>
			</div>
		</div>
	);
};
