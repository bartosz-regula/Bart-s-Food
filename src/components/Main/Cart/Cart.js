import React, { useContext } from 'react'
import classes from '../Cart/Cart.module.css'
import Summary from './Summary';
import CartContext from '../../../context/cart-context';


const Cart = (props) => {
	const cartCtx = useContext(CartContext)

	const totalAmount = `£${cartCtx.totalAmount.toFixed(2)}`;
	const hasItems = cartCtx.items.length > 0


	const cartList = cartCtx.items.map(item => (
		<div className={classes.cart_items}>
			<span className={classes.item_name}>{item.name}</span>

			<div className={classes.form}>
				<button className={classes.btn}>-</button>
				<span className={classes.amount}>x {item.amount}</span>
				<button className={classes.btn}>+</button>
				<span className={classes.price}>£{(item.amount * item.price).toFixed(2)}</span>
				{/* <button>
					<ion-icon name="trash-outline"></ion-icon>
				</button> */}
			</div>
		</div>
	));

	return (
		<div className={classes.container}>
			<div className={classes.content}>
				<div className={classes.header}>
					<h2>
						<span>Your order</span>
						<span>{totalAmount}</span>
					</h2>
					<p> 10£ missing to free delivery</p>
				</div>
				<section className={classes.cart_items_section}>
					{cartList}
				</section>
				<div className={classes.summary} >
					<Summary
						name='Subtotal'
						price={totalAmount}
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
						price={totalAmount}
						className='total'>
					</Summary>
					<div className={classes.summary_btn_container}>
						{hasItems && <button onClick={props.onShowCheckout}>Go to checkout</button>}
					</div>
				</div>

			</div>
		</div >
	)
}

export default Cart