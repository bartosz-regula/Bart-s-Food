import React from 'react'
import classes from '../Cart/Cart.module.css'
import Summary from './Summary';

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
				<section>
					{cartList}
				</section>
				<div className={classes.summary} >
					<Summary
						name='Subtotal'
						price='£37.50'
						className='subtotal'>
					</Summary>
					<Summary
						name='20% discount'
						price='£17.50'
						className='subtotal'>
					</Summary>
					<Summary
						name='Bag fee'
						price='£0.50'
						className='subtotal'>
					</Summary>
					<Summary
						name='Service charge'
						price='£0.50'
						className='subtotal'>
					</Summary>
					<Summary
						name='Delivery fee'
						price='£0.00'
						className='subtotal'>
					</Summary>
					<Summary
						name='Total'
						price='£37.50'
						className='total'>
					</Summary>
					<button>Go to checkout</button>
				</div>

			</div>
		</div >
	)
}

export default Cart