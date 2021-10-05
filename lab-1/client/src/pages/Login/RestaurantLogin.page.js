import React from "react";
import { Jumbotron } from "react-bootstrap";
import { RestaurantLogin } from "../../components/Login/RestaurantLogin";
import "./CustomerSignin.style.css";

export const RestaurantSignin = () => {
	return (
		<div className="login-page">
			<div className>
				<Jumbotron className="form-box">
					<RestaurantLogin />
				</Jumbotron>
			</div>
		</div>
	);
};
