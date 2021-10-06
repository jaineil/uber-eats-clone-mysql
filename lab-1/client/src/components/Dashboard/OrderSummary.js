import React, { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
	Container,
	Navbar,
	Col,
	Row,
	Button,
	Alert,
	Form,
	FormGroup,
	FormLabel,
	FormControl,
} from "react-bootstrap";
import Axios from "axios";

export const OrderSummary = (props) => {
	// const cart = props.location.state[0];
	const cart = JSON.parse(sessionStorage.state);
	console.log(JSON.stringify(cart));

	const componentIsMounted = useRef(true);

	const [show, setShow] = useState(false);
	const [addressIds, setAddressIds] = useState([]);
	const [selectedAddressId, setSelectedAddressId] = useState("");
	const [street, setStreet] = useState("");
	const [apt, setApt] = useState("");
	const [city, setCity] = useState("");
	const [state, setState] = useState("");
	const [zipcode, setZipcode] = useState("");

	useEffect(() => {
		// each useEffect can return a cleanup function
		return () => {
			componentIsMounted.current = false;
		};
	}, []);

	useEffect(() => {
		const fetchAllAddresses = async () => {
			try {
				const response = await Axios.get(
					"http://localhost:3000/fetchAddresses", // FIX: change this to inline req parameter
					{
						params: {
							customerId: 5,
						},
					}
				);
				console.log(response.data);
				setAddressIds(response.data);
				const defaultAddress = response.data[0];
				setSelectedAddressId(defaultAddress.ID);
			} catch (err) {
				console.error(err);
			}
		};
		fetchAllAddresses();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const orderItemsList = cart.cartItems.map((item) => (
		<Row>
			<Col xs={6} md={4}>
				<h5>{item.name}</h5>
			</Col>
			<Col xs={6} md={4}>
				<h5>Qty. {item.amount}</h5>
			</Col>
			<Col xs={6} md={4}>
				<h5>${item.price}</h5>
			</Col>
		</Row>
	));

	const addressList = addressIds.map((addr) => (
		<option value={addr.ID}>
			{addr.HOUSE_NUMBER} {addr.STREET} {addr.CITY} {addr.STATE}{" "}
			{addr.PINCODE}
		</option>
	));

	const selectAddressHandler = (e) => {
		e.preventDefault();
		setSelectedAddressId(e.target.value);
	};

	const addNewAddressForCustomer = async () => {
		const payload = {
			customerId: 5, // FIX: make this a variable passed down from login flow
			street: street,
			apt: apt,
			city: city,
			state: state,
			zipcode: zipcode,
			country: "United States",
		};
		try {
			await Axios.post(
				"http://localhost:3000/addNewCustomerAddress",
				payload
			);
		} catch (err) {
			console.error("Error when registering new customer => ", err);
		}
	};

	const finalizedOrder = async () => {
		setShow(true);
		const today = new Date();
		const payload = {
			restaurantId: cart.restaurantId,
			customerId: 5,
			time: today.toISOString(),
			amount: cart.total,
			addressId: selectedAddressId,
			items: cart.cartItems,
		};
		const res = await Axios.post(
			"http://localhost:3000/placeOrder",
			payload
		);
		console.log("Response from API => ", res);
	};

	return (
		<Container fluid>
			<Row
				style={{
					paddingTop: "25px",
					paddingLeft: "50px",
					paddingRight: "50px",
				}}
			>
				<Navbar>
					<Container>
						<Navbar.Brand href="#home">
							<img
								src="https://uber-eats-webapp-clone.s3.us-west-1.amazonaws.com/logo.svg"
								width="150"
								height="50"
								className="d-inline-block align-top"
								alt="UberEats logo"
							/>
						</Navbar.Brand>
					</Container>
				</Navbar>

				<Col md={8} style={{ background: "whitesmoke" }}>
					<h3 className="mt-3">Select Address</h3>
					<FormControl as="select" onChange={selectAddressHandler}>
						{addressList}
					</FormControl>
					<br />
					<h5>Don't see your address?</h5>
					<h5>Add a new address:</h5>

					<Form onClick={addNewAddressForCustomer}>
						<FormGroup className="mt-3">
							<FormLabel>Street: </FormLabel>
							<FormControl
								type="text"
								placeholder="eg. 1234 Main St"
								onChange={(e) => {
									setStreet(e.target.value);
								}}
							/>
						</FormGroup>

						<FormGroup className="mt-3">
							<FormLabel>Apartment: </FormLabel>
							<FormControl
								type="text"
								placeholder="eg. Apartment, studio, or floor"
								onChange={(e) => {
									setApt(e.target.value);
								}}
							/>
						</FormGroup>

						<Row>
							<Col>
								<FormGroup className="mt-3">
									<FormLabel>City: </FormLabel>
									<FormControl
										type="text"
										placeholder="eg. San Jose"
										onChange={(e) => {
											setCity(e.target.value);
										}}
									/>
								</FormGroup>
							</Col>
							<Col>
								<FormGroup className="mt-3">
									<FormLabel>State: </FormLabel>
									<FormControl
										type="text"
										placeholder="eg. CA"
										onChange={(e) => {
											setState(e.target.value);
										}}
									/>
								</FormGroup>
							</Col>
							<Col>
								<FormGroup className="mt-3 mb-3">
									<FormLabel>Zipcode: </FormLabel>
									<FormControl
										type="text"
										placeholder="eg. 95111"
										onChange={(e) => {
											setZipcode(e.target.value);
										}}
									/>
								</FormGroup>
							</Col>
						</Row>
						<Button
							type="submit"
							style={{
								background: "black",
								border: "black",
							}}
							className="mb-3"
						>
							Submit
						</Button>
					</Form>
				</Col>

				<Col md={4} style={{ background: "whitesmoke" }}>
					<h2 className="mt-3">Order Summary</h2>
					<br />
					{orderItemsList}
					<hr />
					<Row>
						<Col xs={6} md={4}></Col>
						<Col xs={6} md={4}></Col>
						<Col xs={6} md={4}>
							<h5>{cart.total}</h5>
						</Col>
					</Row>
					<br />

					<Alert show={show} variant="success">
						<Alert.Heading>Congratulations!</Alert.Heading>
						<p>
							Your order has been placed! Stay hungry, our
							delivery executive will be assigned shortly.
						</p>
						<hr />
						<div className="d-flex justify-content-end">
							<Button
								// onClick={finalizedOrder}
								variant="primary"
								style={{
									background: "black",
									border: "black",
								}}
							>
								<Link
									to="customerSignin"
									className="submit-button"
								>
									Go to dashboard
								</Link>
							</Button>
						</div>
					</Alert>

					{!show && (
						<Button
							onClick={finalizedOrder}
							className="mb-3"
							style={{
								background: "black",
								border: "black",
							}}
						>
							Order
						</Button>
					)}
				</Col>
			</Row>
		</Container>
	);
};
