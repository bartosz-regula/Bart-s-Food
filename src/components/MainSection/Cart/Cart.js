import React, { useContext } from 'react'
import classes from '../Cart/Cart.module.css'
import CartSummary from './CartSummary';
import CartItem from './CartItem';
import CartContext from '../../../context/cart-context';



const Cart = (props) => {
	const cartCtx = useContext(CartContext)
	const subtotalAmount = cartCtx.totalAmount;
	let discount = 0;
	const bagFee = 1.50
	const serviceCharge = 2
	let delivery;
	const hasItems = cartCtx.items.length > 0
	const amountMissingForFreeDelivery = `£${(30 - subtotalAmount).toFixed(2)}`;
	const amountMissingForDiscount = `£${(60 - subtotalAmount).toFixed(2)}`;

	if (subtotalAmount >= 60) {
		discount = -(subtotalAmount * 0.2);
	}
	console.log(discount);
	if (subtotalAmount >= 30) {
		delivery = 0
	} else {
		delivery = 12
	}

	const totalAmount = (subtotalAmount + discount + bagFee + serviceCharge + delivery)
	console.log(subtotalAmount);
	console.log(discount);
	console.log(totalAmount);
	console.log(bagFee);
	console.log(serviceCharge);
	console.log(delivery);
	console.log(amountMissingForFreeDelivery);

	const cartItemRemoveHandler = id => { };
	const cartItemAddHandler = item => { };

	const cartList = cartCtx.items.map(item => (
		<CartItem
			key={item.id}
			name={item.name}
			amount={item.amount}
			price={item.price}
			onRemove={cartItemRemoveHandler.bind(null, item.id)}
			onAdd={cartItemAddHandler.bind(null, item)} />

	));


	return (
		<div>
			<div className={classes.cart_container}>

				{!hasItems &&
					<div>
						<h2>We are looking forward to your order!</h2>
						<p>Free delivery for orders over £30! :)!</p>
						<p>20% discount for order over £60!:)!</p>
					</div>}
				{hasItems &&
					<div>
						<div className={classes.cart_header}>
							<h2>
								<span>Your order</span>
								<span>£{(subtotalAmount).toFixed(2)}</span>
							</h2>
							{subtotalAmount <= 30 &&
								<p className={classes.paid_delivery}> {amountMissingForFreeDelivery} missing to free delivery
								</p>}
							{subtotalAmount >= 30 &&
								<p className={classes.free_delivery}> You qualify for free delivery!
								</p>}
							{/* {subtotalAmount <= 60 &&
								<p className={classes.paid_delivery}> Spend {amountMissingForDiscount} more and get 20% discount!
								</p>}
							{subtotalAmount >= 60 &&
								<p className={classes.free_delivery}> You have 20% discount!!
								</p>} */}
						</div>
						<section className={classes.cart_items_list}>
							{cartList}
						</section>
						<div>
							<CartSummary
								name='Subtotal'
								price={subtotalAmount}
								className='subtotal'>
							</CartSummary>
							{subtotalAmount >= 60 &&
								<CartSummary
									name='20% discount'
									price={discount}
									className='discount'>
								</CartSummary>}
							<CartSummary
								name='Bag fee'
								price={bagFee}
								className='subtotal'>
							</CartSummary>
							<CartSummary
								name='Service charge'
								price={serviceCharge}
								className='subtotal'>
							</CartSummary>
							<CartSummary
								name='Delivery fee'
								price={delivery}
								className='subtotal'>
							</CartSummary>
							<CartSummary
								name='Total'
								price={totalAmount}
								className='total'>
							</CartSummary>
							{/* {subtotalAmount <= 60 &&
								<p className={classes.paid_delivery}> Spend {amountMissingForDiscount} more and get 20% discount!
								</p>}
							{subtotalAmount >= 60 &&
								<p className={classes.free_delivery}> You have 20% discount!!
								</p>} */}
							<div >
								{hasItems && <button className={classes.checkout_btn} onClick={props.onShowCheckout}>Go to checkout</button>}
							</div>
						</div>
					</div>}
			</div>
		</div>

	)
}

export default Cart