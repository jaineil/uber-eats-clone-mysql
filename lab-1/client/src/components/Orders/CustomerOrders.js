import { useRef, useState, useEffect } from "react";
import { useHistory } from "react-router";
import {
	Row,
	Col,
	Container,
	Navbar,
	Form,
	FormControl,
} from "react-bootstrap";
import cookie from "react-cookies";
import Axios from "axios";
import classes from "../Orders/RestaurantOrders.module.css";

export const CustomerOrders = (props) => {
	const [orders, setOrders] = useState([]);
	const [displayOrders, setDisplayOrders] = useState([]);

	const history = useHistory();

	if (!cookie.load("customerId")) {
		console.log("No user cookie!");
		history.push("/customerSignin");
	} else {
		console.log("All good on the cookie front!");
	}

	const customerId = props.match.params.customerId;

	const componentIsMounted = useRef(true);
	useEffect(() => {
		// each useEffect can return a cleanup function
		return () => {
			componentIsMounted.current = false;
		};
	}, []);

	const fetchOrders = async () => {
		console.log("About to fetch orders for => ", customerId);
		let temp = [];
		try {
			const response = await Axios.get(
				`http://localhost:3000/fetchOrderHistory/${customerId}`
			);
			const fetchedOrders = response.data;

			for (const k of fetchedOrders) {
				console.log(k);
				temp.push(k);
			}

			setOrders(temp);
		} catch (err) {
			console.error(err);
		}
	};

	useEffect(() => {
		fetchOrders();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const createOrdersSummary = (dishNames, dishQuantities) => {
		const orderItemsList = dishNames.map((orderItem) => (
			<Row>
				<Col style={{ width: "150px", marginLeft: "100px" }}>
					{orderItem.name}
					<hr />
				</Col>
			</Row>
		));

		return orderItemsList;
	};

	const handleOrdersFilterChange = (e) => {
		const filter = e.target.value;
		let filteredOrders = [];

		for (const order of orders) {
			if (order.STATUS === filter) {
				filteredOrders.push(
					<Container>
						<li className={classes.order}>
							<Row>
								<Col>
									<h3>{order.NAME}</h3>
									<div>
										{order.STREET} #{order.HOUSE_NUMBER}
									</div>
									<div>{order.CITY}</div>
									<br />
									<div>
										<Col>
											Contact: {order.CONTACT_NUMBER}
										</Col>
									</div>
								</Col>

								<Col>Current status: {order.STATUS}</Col>

								<Col>
									<div>
										{createOrdersSummary(order.DISH_NAMES)}
									</div>
									<div style={{ paddingLeft: "100px" }}>
										<h6>Total: ${order.AMOUNT}</h6>
									</div>
								</Col>
							</Row>
						</li>
					</Container>
				);
			}
		}

		setDisplayOrders(filteredOrders);
	};

	return (
		<Container fluid style={{ background: "black", maxHeight: "500vh" }}>
			<Navbar variant="light" style={{ backgroundColor: "whitesmoke" }}>
				<Container>
					<Navbar.Brand href="/dashboard">
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

			<Form.Label className="mt-5" style={{ color: "white" }}>
				<h4>Select order type:</h4>
			</Form.Label>
			<FormControl as="select" onChange={handleOrdersFilterChange}>
				<option>Select type of order to view</option>
				<option value="ORDER_PLACED">Order Placed</option>
				<option value="PREPARING">Preparing</option>
				<option value="ON_THE_WAY">On the way</option>
				<option value="DELIVERED">Delivered</option>
			</FormControl>

			<h4 style={{ color: "white" }}>Your past orders</h4>

			<section className={classes.orders}>
				<div className={classes.card}>
					<ul>{displayOrders}</ul>
				</div>
			</section>
		</Container>
	);
};
