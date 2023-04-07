import React from 'react'
import classes from '../Cart/Cart.module.css'

const DUMMY_CART = [
	{
		id: '1',
		name: 'Burger Extra Large',
		price: '£12.99'

	},
	{
		id: '2',
		name: 'Kebab Doner',
		price: '£15.99'

	},
	{
		id: '3',
		name: 'Barbecue Burger',
		price: '£13.99'
	}
];


const Cart = () => {

	const cartList = DUMMY_CART.map(item => (
		<div className={classes.cart_items}>
			<span className={classes.item_name}>{item.name}</span>
			<form className={classes.form}>
				<div>
					<label>x</label>
					<input
						type='number'
						min='1'
						max='12'
						step='1'
						defaultValue='1' />
				</div>
				<button>
					<ion-icon name="trash-outline"></ion-icon>
				</button>
				<span>{item.price}</span>
			</form>
		</div>
	));


	return (
		<div className={classes.container}>
			<div className={classes.content}>
				<div className={classes.header}>
					<h2>
						<span>Your order</span>
						<span>£25.34</span>
					</h2>
					<p> 10£ missing to free delivery</p>
				</div>

				{cartList}

				<div className={classes.summary} >
					<div className={classes.subtotal}>
						<span>Subtotal</span>
						<span>£37.50</span>
					</div>
					<div className={classes.subtotal}>
						<span>20% discount</span>
						<span>-£37.50</span>
					</div>
					<div className={classes.subtotal}>
						<span>Bag fee</span>
						<span>£0.10</span>
					</div>
					<div className={classes.subtotal}>
						<span>Service charge</span>
						<span>£0.50</span>
					</div>
					<div className={classes.subtotal}>
						<span>Delivery fee</span>
						<span>£0.00</span>
					</div>
					<div className={classes.total}>
						<span>Total</span>
						<span>£37.50</span>
					</div>
					<button>Go to checkout</button>
				</div>

			</div>
		</div >
	)
}

export default Cart