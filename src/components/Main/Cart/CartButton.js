import React, { useContext } from 'react';
import classes from './CartButton.module.css';
import CartContext from '../../../context/cart-context';
const CartButton = (props) => {
	const cartCtx = useContext(CartContext)
	console.log(cartCtx);

	const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
		return curNumber + item.amount
	}, 0);
	console.log(numberOfCartItems);

	return (
		<button className={classes.button} onClick={props.onClick}>
			<span className={classes.icon}>
			</span>
			<span>Your Cart</span>
			<span className={classes.badge}>{numberOfCartItems}</span>
		</button>
	)
}

export default CartButton;