import React, { useContext, useEffect, useState } from 'react'
import classes from '../Cart/Cart.module.css'
import CartSummary from './CartSummary';
import CartItem from './CartItem';
import CartContext from '../../../context/cart-context';
import empty_basket from '../../../assets/images/empty_cart.png'



const Cart = (props) => {
	const cartCtx = useContext(CartContext)
	let delivery;
	let discount = 0;
	const bagFee = 1.50
	const serviceCharge = 2
	const subtotalAmount = cartCtx.totalAmount;
	const hasItems = cartCtx.items.length > 0
	const amountMissingForFreeDelivery = `£${(30 - subtotalAmount).toFixed(2)}`;
	const amountMissingForDiscount = `£${(60 - subtotalAmount).toFixed(2)}`;

	const [cartDisplay, setCartDisplay] = useState("none");

	useEffect(() => {
		function handleResize() {
			if (window.innerWidth <= 1200) {
				setCartDisplay(props.display);
			} else {
				setCartDisplay("block");
			}
		}
		window.addEventListener("resize", handleResize);
		handleResize();

		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, [props.display]);

	const cartHide = {
		display: cartDisplay
	};


	discount = -(subtotalAmount * 0.2);
	if (subtotalAmount >= 60) {
	}
	console.log(discount);
	if (subtotalAmount >= 30) {
		delivery = 0
	} else {
		delivery = 8.50
	}

	const totalAmount = (subtotalAmount + discount + bagFee + serviceCharge + delivery)



	const cartItemRemoveHandler = id => {
		cartCtx.removeItem(id);
	};
	const cartItemAddHandler = item => {
		cartCtx.addItem({ ...item, amount: 1, price: (item.price / item.amount) });
	};


	const header = (
		<div className={classes.cart_header} >
			{!cartDisplay && <button className={classes.close_btn} onClick={props.onCloseCart}><ion-icon name="close-outline"></ion-icon>
			</button>}
			<h2>
				<span>Your order</span>
				<span>£{(subtotalAmount).toFixed(2)}</span>
			</h2>
			{subtotalAmount <= 30 &&
				<p className={classes.paid}> {amountMissingForFreeDelivery} missing to free delivery
				</p>
			}
			{subtotalAmount >= 30 &&
				<p className={classes.free}> You qualify for free delivery!
				</p>
			}
			{(subtotalAmount >= 30 && subtotalAmount < 60) &&
				<p className={classes.paid}> Spend {amountMissingForDiscount} more and get 20% discount!
				</p>
			}
			{subtotalAmount >= 60 &&
				<p className={classes.free}> You have 20% discount!
				</p>
			}
		</div >
	)

	const cartList = cartCtx.items.map(item => (
		<CartItem
			key={item.id}
			name={item.name}
			amount={item.amount}
			price={item.price}
			onRemove={cartItemRemoveHandler.bind(null, item.id)}
			onAdd={cartItemAddHandler.bind(null, item)} />

	));
	const test = () => {
		props.onShowCheckout();
		props.onCloseCart()
	}

	return (
		<div>
			<div className={classes.cart_container} style={cartHide}>

				{!hasItems &&
					<div className={classes.cart_empty_container}>
						{!cartDisplay && <button className={classes.close_btn} onClick={props.onCloseCart}><ion-icon name="close-outline"></ion-icon>
						</button>}
						<img src={empty_basket} alt='Empty basket' />
					</div>}
				{hasItems &&
					<div>
						{header}
						<section className={classes.cart_items_list}>
							{cartList}
						</section>
						<div className={classes.summary_list}>
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
							<div >
								<button
									className={classes.checkout_btn} onClick={test}>Go to checkout
								</button>
							</div>
						</div>
					</div>}
			</div>
		</div>

	)
}

export default Cart