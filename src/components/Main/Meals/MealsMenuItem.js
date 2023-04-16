import { useEffect, useState } from "react"
import React from 'react'
import Form from "../../UI/Form";
import classes from './MealsMenuItem.module.css'
import supabase from '../../../supabase';


const MealsMenuItem = (props) => {

	const [food, setFood] = useState([])
	const categoryName = props.category

	useEffect(function () {
		async function getFood() {
			const { data: Food, error } = await supabase
				.from('Food').select('*').eq('category', categoryName);
			setFood(Food);
		}
		getFood();
	}, [])

	const mealsList = food.map(({ id, name, description, price }) => (
		<li className={classes.card} key={id}>
			<div className={classes.meal} id={id} >
				<h3>{name}</h3>
				<p>{description}</p>
				<div className={classes.price}>from £{price.toFixed(2)}</div>
			</div>
			<Form />
		</li>
	));



	return (

		<div className={classes.container}>
			<h2 id={props.category}>{props.category}</h2>
			<ul>
				{mealsList}
			</ul>
		</div>
	)
}

export default MealsMenuItem