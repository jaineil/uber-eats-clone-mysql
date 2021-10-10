import React from "react";
import { RestaurantLogin } from "../../components/Login/RestaurantLogin";
import "./Signin.style.css";

export const RestaurantSignin = () => {
	return (
		<div className="login-page">
			<div className="form-box">
				<RestaurantLogin />
			</div>
		</div>
	);
};
