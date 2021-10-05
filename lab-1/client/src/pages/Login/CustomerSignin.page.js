import React from "react";
import { Jumbotron } from "react-bootstrap";
import { CustomerLogin } from "../../components/Login/CustomerLogin";
import "./CustomerSignin.style.css";

export const CustomerSignin = () => {
	return (
		<div className="login-page">
			<div className>
				<Jumbotron className="form-box">
					<CustomerLogin />
				</Jumbotron>
			</div>
		</div>
	);
};
