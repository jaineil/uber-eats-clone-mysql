import React, { useEffect, useRef, useState } from "react";
import Header from "../../components/Ord/Layout/Header";
import Meals from "../../components/Ord/Meals/Meals";
import Cart from "../../components/Ord/Cart/Cart";
import CartProvider from "../../store/CartProvider";
import Axios from "axios";

export const RestaurantDetails = () => {
	const [meals, setMeals] = useState([]);
	const [restaurantMeta, setRestaurantMeta] = useState([]);
	const [cartIsShown, setCartIsShown] = useState(false);

	const componentIsMounted = useRef(true);

	useEffect(() => {
		// each useEffect can return a cleanup function
		return () => {
			componentIsMounted.current = false;
		};
	}, []);

	useEffect(() => {
		const fetchRestaurantMeta = async () => {
			try {
				const response = await Axios.get(
					"http://localhost:3000/fetchRestaurantMeta",
					{
						params: {
							restaurantId: 1,
						},
					}
				);
				const meta = response.data[0];
				setRestaurantMeta(meta);
				console.log("Restaurant Meta => ", restaurantMeta);
			} catch (err) {
				console.error(err);
			}
		};
		fetchRestaurantMeta();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	useEffect(() => {
		const fetchAllMeals = async () => {
			try {
				const response = await Axios.get(
					"http://localhost:3000/fetchDishes",
					{
						params: {
							restaurantId: 1,
						},
					}
				);
				setMeals(response.data);
				console.log("Restaurant Meta => ", meals);
			} catch (err) {
				console.error(err);
			}
		};
		fetchAllMeals();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const showCartHandler = () => {
		setCartIsShown(true);
	};

	const hideCartHandler = () => {
		setCartIsShown(false);
	};

	return (
		<CartProvider>
			{cartIsShown && <Cart onClose={hideCartHandler} />}
			<Header
				onShowCart={showCartHandler}
				restaurantImg={restaurantMeta.RESTAURANT_IMAGE_URL}
			/>
			<main>
				<Meals meals={meals} summary={restaurantMeta.DESCRIPTION} />
			</main>
		</CartProvider>
	);
};
