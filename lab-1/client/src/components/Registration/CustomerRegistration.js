import React, { useState } from "react";
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
import { useHistory } from "react-router";
import Axios from "axios";
import { Link } from "react-router-dom";
import "./Registration.component.css";

export const CustomerRegistration = (props) => {
	console.log(JSON.stringify(props));
	const history = useHistory();

	const [username, setUserName] = useState("");
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [dateOfBirth, setDateOfBirth] = useState("mm-dd-yyyy");
	const [mobileNumber, setMobileNumber] = useState("");
	const [emailId, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const createAccount = async (e) => {
		e.preventDefault();

		const payload = {
			username: username,
			firstName: firstName,
			lastName: lastName,
			dateOfBirth: new Date(dateOfBirth).toISOString(),
			mobileNumber: String(mobileNumber),
			emailId: emailId,
			password: password,
		};
		console.log("Created payload!");
		try {
			await Axios.post("http://localhost:3000/createCustomer", payload);
			console.log("Successfully registered");
			history.push("/customerSignin");
		} catch (err) {
			console.error("Error when registering new customer => ", err);
		}
	};

	return (
		<Container fluid>
			<Row>
				<Col>
					<h1 className="text">Customer Registration</h1>
				</Col>
			</Row>
			<Row>
				<Col>
					<Form onSubmit={createAccount} className="p2">
						<FormGroup>
							<FormLabel>Username: </FormLabel>
							<FormControl
								//className="registration-form"
								type="text"
								name="username"
								onChange={(e) => {
									setUserName(e.target.value);
								}}
								placeholder="eg. johndoe"
								required
							/>
						</FormGroup>

						<FormGroup>
							<FormLabel>First Name: </FormLabel>
							<FormControl
								type="text"
								name="firstName"
								onChange={(e) => {
									setFirstName(e.target.value);
								}}
								placeholder="eg. John"
								required
							/>
						</FormGroup>

						<FormGroup>
							<FormLabel>Last Name: </FormLabel>
							<FormControl
								type="text"
								name="lastName"
								onChange={(e) => {
									setLastName(e.target.value);
								}}
								placeholder="eg. Doe"
								required
							/>
						</FormGroup>

						<FormGroup>
							<FormLabel>Date of Birth: </FormLabel>
							<FormControl
								type="date"
								name="dateOfBirth"
								onChange={(e) => {
									setDateOfBirth(e.target.value);
								}}
								required
							/>
						</FormGroup>

						<FormGroup>
							<FormLabel>Mobile Number: </FormLabel>
							<FormControl
								type="tel"
								name="mobileNumber"
								onChange={(e) => {
									setMobileNumber(e.target.value);
								}}
								placeholder="XXX-XXX-XXXX"
								required
							/>
						</FormGroup>

						<FormGroup>
							<FormLabel>Email ID: </FormLabel>
							<FormControl
								type="email"
								name="emailId"
								onChange={(e) => {
									setEmail(e.target.value);
								}}
								placeholder="XXX-XXX-XXXX"
								required
							/>
						</FormGroup>

						<FormGroup>
							<FormLabel>Password: </FormLabel>
							<FormControl
								type="password"
								name="password"
								onChange={(e) => {
									setPassword(e.target.value);
								}}
								required
							/>
						</FormGroup>
						<br />
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
											to="customerSignin"
											className="submit-button"
										>
											Go to login
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
