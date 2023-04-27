import MealsMenuItem from './MealsMenuItem';
import { useEffect, useState } from "react"
import supabase from '../../../../supabase'
import classes from './MealsMenuCategory.module.css'
import Logo from '../../../../assets/images/bartsfood_logo_black_yellow.png'



const MealsMenuCategory = (props) => {
	const [food, setFood] = useState([])
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

		<div className={classes.container}>
			<div className={classes.img_header_container}>
				<img src={Logo} alt='Company logo'></img>
				<h2>{props.category}</h2>
			</div>
			<ul>
				{menuList}
			</ul>
		</div>

	)
}

export default MealsMenuCategory