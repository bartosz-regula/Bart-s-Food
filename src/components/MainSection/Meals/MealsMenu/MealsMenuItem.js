import { useContext } from "react"
import React from 'react'
import classes from './MealsMenuItem.module.css'
import CartContext from "../../../../context/cart-context";


const MealsMenuItem = (props) => {
	const cartCtx = useContext(CartContext)


	const addToCartHandler = () => {
		cartCtx.addItem({
			id: props.id,
			name: props.name,
			amount: 1,
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
			<div className={classes.add_btn_container}>
				<button onClick={addToCartHandler} className={classes.add_btn}>Add</button>
			</div>
		</li>

	)
}

export default MealsMenuItem;
