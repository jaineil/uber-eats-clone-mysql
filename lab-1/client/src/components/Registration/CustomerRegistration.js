import React, { useState } from "react";
import Axios from "axios";

export const CustomerRegistration = (props) => {
	console.log(JSON.stringify(props));

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
		} catch (err) {
			console.error("Error when registering new customer => ", err);
		}
	};

	return (
		<div className="cover-user">
			<div className="detail">
				<h2>Let's setup your account!</h2>
				<h6>
					Already have an account?{" "}
					<button>
						<a href="/userSignIn">Login</a>
					</button>
				</h6>
			</div>

			<form className="form-user-signup" onSubmit={createAccount}>
				<h2 className="logo">
					<span id="one">Uber</span>
					<span id="two">Eats</span>
				</h2>

				<label htmlFor="username">Username </label>
				<input
					type="text"
					name="username"
					onChange={(e) => {
						setUserName(e.target.value);
					}}
					placeholder="eg. johndoe"
					required
				/>

				<label htmlFor="firstName">First Name </label>
				<input
					type="text"
					name="firstName"
					onChange={(e) => {
						setFirstName(e.target.value);
					}}
					placeholder="eg. John"
					required
				/>

				<label htmlFor="lastName">Last Name </label>
				<input
					type="text"
					name="lastName"
					onChange={(e) => {
						setLastName(e.target.value);
					}}
					placeholder="eg. Doe"
					required
				/>

				<label htmlFor="dateOfBirth">Date of Birth </label>
				<input
					type="date"
					name="dateOfBirth"
					onChange={(e) => {
						setDateOfBirth(e.target.value);
					}}
					required
				/>

				<label htmlFor="mobileNumber">Mobile Number </label>
				<input
					type="tel"
					name="mobileNumber"
					onChange={(e) => {
						setMobileNumber(e.target.value);
					}}
					//pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
					required
				/>

				<label htmlFor="emailId">Email</label>
				<input
					type="email"
					name="emailId"
					onChange={(e) => {
						setEmail(e.target.value);
					}}
					pattern="[a-z0-9._-]+@[a-z0-9.-]+\.[a-z]{2,}$"
					placeholder="eg. john.doe@anymail.com"
					required
				/>

				<label htmlFor="password">Password</label>
				<input
					type="password"
					name="password"
					onChange={(e) => {
						setPassword(e.target.value);
					}}
					// pattern="(?=.[A-Z])(?=.[a-z])(?=.[0-9])(?=.[$%!@#+^&*]).{8,}"
					placeholder="xxxxxxxx"
					required
				/>

				<button type="submit">Create Account</button>
			</form>
		</div>
	);
};
