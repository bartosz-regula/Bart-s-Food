import React, { useContext, } from 'react';
import classes from './CartButton.module.css';
import CartContext from '../../../context/cart-context';


const CartButton = (props) => {
	const cartCtx = useContext(CartContext)

	const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
		return curNumber + item.amount
	}, 0);

	return (
		<button className={classes.cart_btn} onClick={props.onShowCart}>
			<span className={classes.icon}><ion-icon name="cart-outline"></ion-icon>
			</span>
			<span className={classes.badge}>{numberOfCartItems}</span>
		</button>
	)
}

export default CartButton;