import React from 'react'
import classes from './CartSummary.module.css'

const CartSummary = (props) => {
	return (
		<div className={classes[props.className]}>
			<span>{props.name}</span>
			<span>£{(props.price).toFixed(2)}</span>
		</div>
	)
}

export default CartSummary