import { useEffect, useState, useContext } from "react"
import React from 'react'
import MealsMenuItemForm from "./MealsMenuItemForm";
import classes from './MealsMenuItem.module.css'
import supabase from '../../../supabase';
import CartContext from "../../../context/cart-context";


const MealsMenuItem = (props) => {
	const cartCtx = useContext(CartContext)

	const [food, setFood] = useState([])
	const categoryName = props.category

	const addToCartHandler = amount => {
		cartCtx.addItem({
			id: props.id,
			name: props.name,
			amount: amount,
			price: props.price
		})
	}

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
			<MealsMenuItemForm onAddToCart={addToCartHandler} />
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