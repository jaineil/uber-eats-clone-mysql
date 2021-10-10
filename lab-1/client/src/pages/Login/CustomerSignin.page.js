import React from "react";
import { CustomerLogin } from "../../components/Login/CustomerLogin";
import "./Signin.style.css";

export const CustomerSignin = () => {
	return (
		<div className="login-page">
			<div className="form-box">
				<CustomerLogin />
			</div>
		</div>
	);
};
