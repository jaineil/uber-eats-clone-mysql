import React from "react";
import { Container } from "react-bootstrap";
import { RestaurantLogin } from "../../components/Login/RestaurantLogin";
import "./Signin.style.css";

export const RestaurantSignin = () => {
	return (
		<div
			className="login-page"
			style={{
				backgroundImage: `url("https://uber-eats-webapp-clone.s3.us-west-1.amazonaws.com/cust-login.jpg") no-repeat center center fixed`,
			}}
		>
			<div className="form-box">
				<RestaurantLogin />
			</div>
		</div>
	);
};
