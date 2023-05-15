import React, { useContext, useEffect, useState } from 'react';
import classes from './CartButton.module.css';
import CartContext from '../../../context/cart-context';


const CartButton = (props) => {
	const cartCtx = useContext(CartContext)
	const [btnIsHighlighted, setBtnIsHighlighted] = useState(false)

	const { items } = cartCtx;

	const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
		return curNumber + item.amount
	}, 0);

	const btnClasses = `${classes.cart_btn} ${btnIsHighlighted ? classes.bump : ''}`


	useEffect(() => {
		if (items.length === 0) {
			return;
		}
		setBtnIsHighlighted(true);

		const timer = setTimeout(() => {
			setBtnIsHighlighted(false)
		}, 300);

		return () => {
			clearTimeout(timer);
		}

	}, [items]);


	return (

		<button className={btnClasses} onClick={props.onShowCart}>
			<span className={classes.icon}><ion-icon name="cart-outline"></ion-icon>
			</span>
			<span className={classes.badge}>{numberOfCartItems}</span>
		</button>

	)
}

export default CartButton;