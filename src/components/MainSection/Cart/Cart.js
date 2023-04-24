import React, { useContext } from 'react'
import classes from '../Cart/Cart.module.css'
import CartSummary from './CartSummary';
import CartContext from '../../../context/cart-context';


const Cart = (props) => {
	const cartCtx = useContext(CartContext)

	const totalAmount = `£${cartCtx.totalAmount.toFixed(2)}`;
	const hasItems = cartCtx.items.length > 0


	const cartList = cartCtx.items.map(item => (
		<div className={classes.cart_item}>
			<span className={classes.item_name}>{item.name}</span>

			<div className={classes.cart_item_summary}>
				<button className={classes.btn}>-</button>
				<span className={classes.cart_item_amount}>x {item.amount}</span>
				<button className={classes.btn}>+</button>
				<span className={classes.cart_item_price}>£{(item.amount * item.price).toFixed(2)}</span>
				{/* <button>
					<ion-icon name="trash-outline"></ion-icon>
				</button> */}
			</div>
		</div>
	));

	return (
		<div className={classes.cart_container}>
			<div className={classes.cart_header}>
				<h2>
					<span>Your order</span>
					<span>{totalAmount}</span>
				</h2>
				<p> 10£ missing to free delivery</p>
			</div>
			<section className={classes.cart_items_list}>
				{cartList}
			</section>
			<div>
				<CartSummary
					name='Subtotal'
					price={totalAmount}
					className='subtotal'>
				</CartSummary>
				<CartSummary
					name='20% discount'
					price='£17.50'
					className='subtotal'>
				</CartSummary>
				<CartSummary
					name='Bag fee'
					price='£0.50'
					className='subtotal'>
				</CartSummary>
				<CartSummary
					name='Service charge'
					price='£0.50'
					className='subtotal'>
				</CartSummary>
				<CartSummary
					name='Delivery fee'
					price='£0.00'
					className='subtotal'>
				</CartSummary>
				<CartSummary
					name='Total'
					price={totalAmount}
					className='total'>
				</CartSummary>
				<div >
					{hasItems && <button className={classes.checkout_btn} onClick={props.onShowCheckout}>Go to checkout</button>}
				</div>
			</div>

		</div>

	)
}

export default Cart