import React, { useEffect, useState } from "react";
import MealsMenuItem from "./MealsMenuItem";
import supabase from "../../../../supabase";
import classes from "./MealsMenuCategory.module.css";
import Logo from "../../../../assets/images/bartsfood_logo_black_yellow.png";



const MealsMenuCategory = (props) => {
	const [food, setFood] = useState([])
	const [isGreaterThan750, setIsGreaterThan750] = useState(
		window.innerWidth > 750
	);
	const [isVisible, setIsVisible] = useState(window.innerWidth > 750);

	useEffect(() => {
		function handleResize() {
			const width = window.innerWidth;

			if (width > 750 && !isGreaterThan750) {
				setIsVisible(true);
				setIsGreaterThan750(true);
			} else if (width <= 750 && isGreaterThan750) {
				setIsVisible(false);
				setIsGreaterThan750(false);
			}
		}

		window.addEventListener("resize", handleResize);
		handleResize();

		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, [isGreaterThan750]);

	const handleisVisible = () => {
		setIsVisible(true)
	}

	const handleisNoVisible = () => {
		setIsVisible(false)
	}


	useEffect(function () {
		async function getFood() {
			let { data: Food, error } = await supabase
				.from('Food').select('*');
			setFood(Food);
		}
		getFood();
	}, [])


	const menuList = food.filter((item) => item.category === props.category).map((meal) => (

		<MealsMenuItem
			category={meal.category}
			key={meal.id}
			id={meal.id}
			name={meal.name}
			description={meal.description}
			price={meal.price}
		/>
	));


	return (
		<div className={classes.meals_menu_category_container}>
			<div className={classes.container_mobile_menu} onClick={!isVisible ? handleisVisible : handleisNoVisible}>
				<h1>{props.category}</h1>
				<button>
					<ion-icon name={isVisible ? "chevron-up-outline" : "chevron-down-outline"}></ion-icon>
				</button>
			</div>
			{isVisible &&
				<div className={classes.container}>
					<div className={classes.img_header_container}>
						<img src={Logo} alt='Company logo'></img>
						<h2>{props.category}</h2>
					</div>
					<ul>
						{menuList}
					</ul>
				</div>
			}
		</div>
	)
}

export default MealsMenuCategory