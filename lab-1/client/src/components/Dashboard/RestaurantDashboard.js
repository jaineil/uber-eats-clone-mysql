import { Container, Navbar, Row, Col, Card, Button } from "react-bootstrap";
import { useHistory } from "react-router";
import cookie from "react-cookies";
import "./RestaurantDashboard.css";

export const RestaurantDashboard = (props) => {
	const history = useHistory();

	if (!cookie.load("restaurantId")) {
		console.log("No user cookie!");
	}

	const handleClick = (path) => {
		history.push(path);
	};

	return (
		<Container
			fluid
			style={{ backgroundColor: "#EAAA00", height: "100vh" }}
		>
			<Row>
				<Navbar bg="light">
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
				<Col>
					<Card
						style={{
							width: "24rem",
							height: "12rem",
							backgroundColor: "black",
						}}
						className="card"
					>
						<Card.Body>
							<Card.Title
								style={{ color: "white", textAlign: "center" }}
							>
								<h5>Your Profile</h5>
							</Card.Title>
							<Card.Text
								style={{ color: "white", textAlign: "center" }}
							>
								Edit your restaurant's information.
							</Card.Text>
							<Button
								variant="primary"
								onClick={() =>
									handleClick("/restaurantProfile")
								}
								className="btn"
							>
								View Profile.
							</Button>
						</Card.Body>
					</Card>
				</Col>

				<Col>
					<Card
						style={{
							width: "24rem",
							height: "12rem",
							backgroundColor: "black",
						}}
						className="card"
					>
						<Card.Body>
							<Card.Title
								style={{ color: "white", textAlign: "center" }}
							>
								<h5>View Menu</h5>
							</Card.Title>
							<Card.Text
								style={{ color: "white", textAlign: "center" }}
							>
								Edit your restaurant's menu.
							</Card.Text>
							<Button
								variant="primary"
								onClick={() => handleClick("/customerSignup")}
								className="btn"
							>
								View Menu.
							</Button>
						</Card.Body>
					</Card>
				</Col>

				<Col>
					<Card
						style={{
							width: "24rem",
							height: "12rem",
							backgroundColor: "black",
						}}
						className="card"
					>
						<Card.Body>
							<Card.Title
								style={{ color: "white", textAlign: "center" }}
							>
								<h5>View Orders</h5>
							</Card.Title>
							<Card.Text
								style={{ color: "white", textAlign: "center" }}
							>
								View your restaurant's information.
							</Card.Text>
							<Button
								variant="primary"
								onClick={() => handleClick("/customerSignup")}
								className="btn"
							>
								View Orders.
							</Button>
						</Card.Body>
					</Card>
				</Col>
			</Row>
		</Container>
	);
};
