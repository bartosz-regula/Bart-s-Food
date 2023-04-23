import { useEffect, useState, useContext } from "react"
import React from 'react'
import MealsMenuItemForm from "./MealsMenuItemForm";
import classes from './MealsMenuItem.module.css'
import supabase from '../../../supabase';
import CartContext from "../../../context/cart-context";


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

		<div >
			{/* <h2 >{props.category}</h2> */}
			<ul className={classes.item_container}>
				<li className={classes.card} key={props.id}>
					<div className={classes.meal} id={props.id} >
						<h3>{props.name}</h3>
						<p>{props.description}</p>
						<div className={classes.price}>from £{props.price.toFixed(2)}</div>
					</div>
					<MealsMenuItemForm onAddToCart={addToCartHandler} />
				</li>
			</ul>
		</div>
	)
}

export default MealsMenuItem