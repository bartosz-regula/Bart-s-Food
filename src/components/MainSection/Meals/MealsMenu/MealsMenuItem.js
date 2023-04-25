import { useContext } from "react"
import React from 'react'
import MealsMenuItemForm from "./MealsMenuItemForm";
import classes from './MealsMenuItem.module.css'
import CartContext from "../../../../context/cart-context";


const MealsMenuItem = (props) => {
	const cartCtx = useContext(CartContext)


	const addToCartHandler = amount => {
		cartCtx.addItem({
			id: props.id,
			name: props.name,
			amount: amount,
			price: props.price
		})
	}

	return (
		<li className={classes.item_container} key={props.id}>
			<div className={classes.item} id={props.id} >
				<h3>{props.name}</h3>
				<p>{props.description}</p>
				<div className={classes.price}>from £{props.price.toFixed(2)}</div>
			</div>
			<MealsMenuItemForm onAddToCart={addToCartHandler} />
		</li>

	)
}

export default MealsMenuItem;

