import React, { useRef, useState, useEffect } from "react";
import { useHistory } from "react-router";
import cookie from "react-cookies";
import {
	Container,
	Navbar,
	Nav,
	Form,
	FormControl,
	Row,
	Col,
	Button,
	ButtonGroup,
	Card,
} from "react-bootstrap";
import BootstrapSwitchButton from "bootstrap-switch-button-react";
import { Link } from "react-router-dom";
import "./CustomerDashboard.css";
import Axios from "axios";

export const CustomerDashboard = (props) => {
	const customerId = cookie.load("customerId");
	const profileLink = `/profile/${customerId}`;
	const favoritesLink = `/favorites/${customerId}`;
	const pastOrdersLink = `/orders/${customerId}`;
	const history = useHistory();

	if (!cookie.load("customerId")) {
		console.log("No user cookie!");
		history.push("/customerSignin");
	} else {
		console.log("All good on the cookie front!");
	}

	const [restaurants, setRestaurants] = useState([]);
	const [displayRestaurants, setDisplayRestaurants] = useState([]);
	const [searchInput, setSearchInput] = useState("");
	const [vegState, setVegState] = useState(false);
	const [nonVegState, setNonVegState] = useState(false);
	const [veganState, setVeganState] = useState(false);

	const componentIsMounted = useRef(true);

	useEffect(() => {
		// each useEffect can return a cleanup function
		return () => {
			componentIsMounted.current = false;
		};
	}, []);

	const fetchRestaurants = async () => {
		console.log("About to fetch dishes for => ");
		try {
			const response = await Axios.get(
				`http://localhost:3000/fetchRestaurants/${customerId}`
			);
			setRestaurants(response.data);
			setDisplayRestaurants(response.data);
			restaurants.map((item) => console.log(JSON.stringify(item)));
		} catch (err) {
			console.error(err);
		}
	};

	useEffect(() => {
		fetchRestaurants();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const filteringHandler = (filters) => {
		let temp = [];
		console.log("incoming filters => ", filters);

		if (
			filters.veg === true ||
			filters.nonVeg === true ||
			filters.vegan === true
		) {
			for (let r of restaurants) {
				if (
					(r.VEG && filters.veg) ||
					(r.NON_VEG && filters.nonVeg) ||
					(r.VEGAN && filters.vegan)
				) {
					console.log(r.NAME, r.VEG, r.NON_VEG, r.VEGAN);
					temp.push(r);
				}
			}
			setDisplayRestaurants(temp);
		} else {
			setDisplayRestaurants(restaurants);
		}
	};

	const vegSelectHandler = async () => {
		const temp = document.getElementById("veg");
		let payload = {
			veg: vegState,
			nonVeg: nonVegState,
			vegan: veganState,
		};
		if (temp.style.backgroundColor === "white") {
			temp.style.backgroundColor = "black";
			temp.style.color = "white";
			temp.style.border = "black";
			setVegState(true);
			payload = { ...payload, veg: !vegState };
			console.log(payload);
			filteringHandler(payload);
			console.log("Added veg filter");
		} else {
			temp.style.backgroundColor = "white";
			temp.style.color = "black";
			temp.style.border = "black";
			setVegState(false);
			payload = { ...payload, veg: !vegState };
			console.log(payload);
			filteringHandler(payload);
			console.log("Remove veg filter");
		}
	};

	const nonVegSelectHandler = (e) => {
		const temp = document.getElementById("nonVeg");
		let payload = {
			veg: vegState,
			nonVeg: nonVegState,
			vegan: veganState,
		};
		if (temp.style.backgroundColor === "white") {
			temp.style.backgroundColor = "black";
			temp.style.color = "white";
			temp.style.border = "black";
			setNonVegState(true);
			payload = { ...payload, nonVeg: !nonVegState };
			console.log(payload);
			filteringHandler(payload);
			console.log("Add nonVeg filter");
		} else {
			temp.style.backgroundColor = "white";
			temp.style.color = "black";
			temp.style.border = "black";
			setNonVegState(false);
			payload = { ...payload, nonVeg: !nonVegState };
			console.log(payload);
			filteringHandler(payload);
			console.log("Remove nonVeg filter");
		}
	};

	const veganSelectHandler = (e) => {
		const temp = document.getElementById("vegan");
		let payload = {
			veg: vegState,
			nonVeg: nonVegState,
			vegan: veganState,
		};
		if (temp.style.backgroundColor === "white") {
			temp.style.backgroundColor = "black";
			temp.style.color = "white";
			temp.style.border = "black";
			setVeganState(true);
			payload = { ...payload, vegan: !veganState };
			console.log(payload);
			filteringHandler(payload);
			console.log("Add vegan filter");
		} else {
			temp.style.backgroundColor = "white";
			temp.style.color = "black";
			temp.style.border = "black";
			setVeganState(false);
			payload = { ...payload, vegan: !veganState };
			console.log(payload);
			filteringHandler(payload);
			console.log("Remove vegan filter");
		}
	};

	const pickupSelectHandler = (e) => {
		const temp = document.getElementById("pickup");
		if (temp.style.backgroundColor === "whitesmoke") {
			temp.style.backgroundColor = "black";
			temp.style.color = "white";
			temp.style.border = "black";

			console.log("Add pickup filter");
		} else {
			temp.style.backgroundColor = "whitesmoke";
			temp.style.color = "black";
			temp.style.border = "black";

			console.log("Remove pickup filter");
		}
	};

	const deliverySelectHandler = (e) => {
		const temp = document.getElementById("delivery");
		if (temp.style.backgroundColor === "whitesmoke") {
			temp.style.backgroundColor = "black";
			temp.style.color = "white";
			temp.style.border = "black";

			console.log("Add delivery filter");
		} else {
			temp.style.backgroundColor = "whitesmoke";
			temp.style.color = "black";
			temp.style.border = "black";

			console.log("Remove delivery filter");
		}
	};

	const searchHandler = async (e) => {
		try {
			const res = await Axios.get("/search", {
				params: {
					searchString: searchInput,
				},
			});
			console.log(res.data);
			setDisplayRestaurants(res.data);
		} catch (err) {
			console.error(err);
		}
	};

	const resetHandler = () => {
		fetchRestaurants();
		window.location.reload(false);
	};

	const addToFavorite = (restaurantId) => async (e) => {
		const payload = {
			restaurantId: restaurantId,
			customerId: customerId,
		};
		console.log(JSON.stringify(payload));
		try {
			const res = await Axios.post(
				"http://localhost:3000/addFavorite",
				payload
			);
			console.log("Successfully added to favorites ", res.data);
		} catch (err) {
			console.error(err);
		}
	};

	const displayRestaurantsList = displayRestaurants.map((resto) => (
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
				<Card.Footer style={{ height: "20vh" }}>
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
						<Col>
							<Button
								variant="primary"
								size="sm"
								style={{
									backgroundColor: "black",
									border: "black",
								}}
								onClick={addToFavorite(resto.ID)}
							>
								Add to favorite
							</Button>
						</Col>
					</Row>
				</Card.Footer>
			</Card>
		</Col>
	));

	return (
		<Container
			fluid
			style={{ backgroundColor: "whitesmoke", height: "500vh" }}
		>
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

			<BootstrapSwitchButton
				checked={true}
				width={100}
				onlabel="Delivery"
				offlabel="Pickup"
				onstyle="outline-dark"
				offstyle="outline-dark"
				// onChange={(checked) => {
				// 	setPickup(checked);
				// 	console.log(pickup);
				// }}
			/>

			<Form style={{ paddingLeft: "450px" }}>
				<Row>
					<Col className="mt-4" md={6}>
						<FormControl
							placeholder="Search here..."
							onChange={(e) => {
								setSearchInput(e.target.value);
							}}
						/>
					</Col>

					<Col>
						<Button
							onClick={searchHandler}
							className="mt-4"
							style={{
								marginRight: "10px",
								backgroundColor: "white",
								border: "black",
								color: "black",
							}}
						>
							Search
						</Button>
					</Col>
					<Col>
						<Button
							onClick={resetHandler}
							className="mt-4"
							style={{
								marginRight: "10px",
								backgroundColor: "white",
								border: "black",
								color: "black",
							}}
						>
							Reset
						</Button>
					</Col>
				</Row>
			</Form>

			<Nav className="flex-column">
				<Nav.Link href={profileLink} style={{ color: "black" }}>
					Profile
				</Nav.Link>
				<Nav.Link href={favoritesLink} style={{ color: "black" }}>
					Favorites
				</Nav.Link>
				<Nav.Link href={pastOrdersLink} style={{ color: "black" }}>
					Your orders
				</Nav.Link>
			</Nav>

			<Container
				style={{
					alignContent: "center",
					alignItems: "center",
					marginTop: "5rem",
					marginRight: "35vh",
					width: "50rem",
				}}
			>
				<ButtonGroup>
					<Button
						style={{
							marginRight: "10px",
							backgroundColor: "white",
							border: "black",
							color: "black",
						}}
						id="veg"
						onClick={vegSelectHandler}
					>
						Veg
					</Button>
					<Button
						style={{
							marginRight: "10px",
							backgroundColor: "white",
							border: "black",
							color: "black",
						}}
						id="nonVeg"
						onClick={nonVegSelectHandler}
					>
						Non-veg
					</Button>
					<Button
						style={{
							marginRight: "10px",
							backgroundColor: "white",
							border: "black",
							color: "black",
						}}
						id="vegan"
						onClick={veganSelectHandler}
					>
						Vegan
					</Button>

					<Button
						style={{
							marginRight: "10px",
							backgroundColor: "white",
							border: "black",
							color: "black",
						}}
						id="pickup"
						onClick={pickupSelectHandler}
					>
						Pick-up
					</Button>

					<Button
						style={{
							marginRight: "10px",
							backgroundColor: "white",
							border: "black",
							color: "black",
						}}
						id="delivery"
						onClick={deliverySelectHandler}
					>
						Delivery
					</Button>
				</ButtonGroup>
			</Container>

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
