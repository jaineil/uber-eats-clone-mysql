import React, { useState } from "react";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
// import { useDispatch } from "react-redux";
import {
	Container,
	Row,
	Col,
	Form,
	Button,
	FormLabel,
	FormControl,
	FormGroup,
} from "react-bootstrap";
import cookie from "react-cookies";
import Axios from "axios";
import "../Registration/Registration.component.css";

export const RestaurantLogin = (props) => {
	const history = useHistory();
	console.log(history);
	//console.log(JSON.stringify(props));

	const [emailId, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [message, setMessage] = useState("");

	const loginToAccount = async (e) => {
		e.preventDefault();
		Axios.defaults.withCredentials = true;

		const payload = {
			emailId: emailId,
			password: password,
		};

		console.log("Created payload! => ", JSON.stringify(payload));
		try {
			const response = await Axios.post(
				"http://localhost:3000/restaurantSignin",
				payload
			);
			console.log(response);
			console.log("Successfully login");

			if (!cookie.load("cookie")) {
				console.log("No user cookie!");
			}
			history.push("/temp");
		} catch (err) {
			console.error(
				"Error when logging in the restaurant owner => ",
				err
			);
			setMessage("Invalid credentials!");
		}
	};

	return (
		<Container fluid>
			<Row>
				<Col>
					<h1 className="text">Login to UberEats</h1>
					<h4>{message}</h4>
				</Col>
			</Row>
			<Row>
				<Col>
					<Form onSubmit={(e) => loginToAccount(e)}>
						<FormGroup className="mb-3">
							<FormLabel className="labels">Email ID: </FormLabel>
							<FormControl
								type="email"
								name="emailId"
								onChange={(e) => {
									setEmail(e.target.value);
								}}
								required
							/>
						</FormGroup>

						<FormGroup className="mb-3">
							<FormLabel className="labels">Password: </FormLabel>
							<FormControl
								type="password"
								name="password"
								onChange={(e) => {
									setPassword(e.target.value);
								}}
								required
							/>
						</FormGroup>

						<FormGroup className="mb-3">
							<Row>
								<Col>
									<Button variant="primary" type="submit">
										Submit
									</Button>
								</Col>
								<Col>
									<Button variant="primary">
										<Link
											to="restaurantSignup"
											className="submit-button"
										>
											New user?
											<br />
											Go to sign up
										</Link>
									</Button>
								</Col>
							</Row>
						</FormGroup>
					</Form>
				</Col>
			</Row>
		</Container>
	);
};
