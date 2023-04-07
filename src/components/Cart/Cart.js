import React from 'react'
import classes from '../Cart/Cart.module.css'


const Cart = () => {
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
				<div>
					<div className={classes.cart_items}>
						<span className={classes.item_name}>Burger</span>
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
							<button>							<ion-icon name="trash-outline"></ion-icon>
							</button>
							<span>£12.99</span>
						</form>
					</div>
					<div className={classes.cart_items}>
						<span className={classes.item_name}>Lamb Doner Kebab Extra </span>
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
							<button>							<ion-icon name="trash-outline"></ion-icon>
							</button>
							<span>£12.99</span>
						</form>
					</div>
					<div className={classes.cart_items}>
						<span className={classes.item_name}>Pepperoni Pizza</span>
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
							<button>							<ion-icon name="trash-outline"></ion-icon>
							</button>
							<span>£12.99</span>
						</form>
					</div>

				</div>
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