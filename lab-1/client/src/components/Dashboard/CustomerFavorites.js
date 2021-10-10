import React, { useRef, useState, useEffect } from "react";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import cookie from "react-cookies";
import Axios from "axios";
import { Card, Col, Row, Button, Container, Navbar } from "react-bootstrap";

export const CustomerFavorites = (props) => {
	const customerId = props.match.params.customerId;
	console.log("Showcasing favorites for customer: ", customerId);

	const history = useHistory();

	if (!cookie.load("customerId")) {
		console.log("No user cookie!");
		history.push("/customerSignin");
	} else {
		console.log("All good on the cookie front!");
	}

	const [restaurants, setRestaurants] = useState([]);

	const componentIsMounted = useRef(true);

	useEffect(() => {
		// each useEffect can return a cleanup function
		return () => {
			componentIsMounted.current = false;
		};
	}, []);

	const fetchFavorites = async () => {
		try {
			const response = await Axios.get(`/fetchFavorites/${customerId}`);
			setRestaurants(response.data);
			restaurants.map((item) => console.log(JSON.stringify(item)));
		} catch (err) {
			console.error(err);
		}
	};

	useEffect(() => {
		fetchFavorites();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const displayRestaurantsList = restaurants.map((resto) => (
		<Col className="ml-3 mt-3" style={{ width: "55rem", height: "500px" }}>
			<Card style={{ width: "18rem", height: "30rem" }}>
				<Card.Img
					variant="top"
					style={{ height: "20vh" }}
					src={resto.RESTAURANT_IMAGE_URL}
				/>
				<Card.Body style={{ height: "10vh" }}>
					<Row>
						<Card.Title>
							<h5>{resto.NAME}</h5>
						</Card.Title>
					</Row>
					<Row>
						<Col>
							<Card.Text>
								<h6>Opens at: {resto.OPENS_AT} </h6>
							</Card.Text>
						</Col>
						<Col>
							<Card.Text>
								<h6>Closes at: {resto.CLOSES_AT}</h6>
							</Card.Text>
						</Col>
						<Card.Text>
							<h5>{resto.CITY}</h5>
						</Card.Text>
					</Row>
				</Card.Body>
				<Card.Footer style={{ height: "10vh" }}>
					<Row>
						<Col>
							<Link to={`/chooseDish/${resto.ID}`}>
								<Button
									variant="primary"
									size="sm"
									style={{
										backgroundColor: "black",
										border: "black",
									}}
								>
									View
								</Button>
							</Link>
						</Col>
					</Row>
				</Card.Footer>
			</Card>
		</Col>
	));

	return (
		<Container fluid style={{ backgroundColor: "whitesmoke" }}>
			<Navbar variant="light" style={{ backgroundColor: "white" }}>
				<Container>
					<Navbar.Brand>
						<img
							src="https://uber-eats-webapp-clone.s3.us-west-1.amazonaws.com/logo.svg"
							width="150"
							height="30"
							className="d-inline-block align-top"
							alt="UberEats logo"
						/>
					</Navbar.Brand>
				</Container>
			</Navbar>
			<h3
				className="mt-3"
				style={{
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
				}}
			>
				Your Favourite Restaurants
			</h3>
			<Container
				style={{
					width: "70rem",
					height: "200rem",
				}}
			>
				<Row>{displayRestaurantsList}</Row>
			</Container>
		</Container>
	);
};
