import React from "react";
import { Jumbotron } from "react-bootstrap";
import { CustomerRegistration } from "../../components/Registration/CustomerRegistration";
import "./CustomerSignup.style.css";

export const CustomerSignup = () => {
	return (
		<div className="registration-page">
			<div className>
				<Jumbotron className="form-box">
					<CustomerRegistration />
				</Jumbotron>
			</div>
		</div>
	);
};
