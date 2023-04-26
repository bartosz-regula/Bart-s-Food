import React from 'react'
import classes from './CartItem.module.css'

const CartItem = (props) => {

	return (
		<div className={classes.cart_item}>
			<span className={classes.item_name}>{props.name}</span>

			<div className={classes.cart_item_summary}>
				<button
					className={classes.btn}
					onClick={props.onRemove}>
					<ion-icon
						name="remove-circle-outline">
					</ion-icon>
				</button>
				<span
					className={classes.cart_item_amount}>
					x {props.amount}
				</span>
				<button
					className={classes.btn}
					onClick={props.onAdd}>
					<ion-icon
						name="add-circle-outline">
					</ion-icon>
				</button>
			</div>
			<span className={classes.cart_item_price}>£{props.price.toFixed(2)}</span>
		</div>
	)
}

export default CartItem;