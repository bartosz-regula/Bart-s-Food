import React from 'react'
import Modal from '../ModalWindows/Modal'
import classes from './Checkout.module.css'

const Checkout = (props) => {
	return (
		<Modal onClose={props.onClose}>
			<button className={classes.close_btn} onClick={props.onCloseCheckout}><ion-icon name="close-outline"></ion-icon>
			</button>
			<form className={classes.form}>
				<h2>Confirm your details!</h2>
				<div>
					<label htmlFor='phone'>Mobile number</label>
					<input type='tel' id='phone'></input>
				</div>
				<div>
					<label htmlFor='address'>Address</label>
					<input type='text' id='address'></input>

				</div>
				<div>
					<label htmlFor='city'>City</label>
					<input type='text' id='city'></input>
				</div>
				<div>
					<label htmlFor='postcode'>Postcode</label>
					<input type='tel' id='postcode'></input>
				</div>
			</form>
			<section className={classes.delivery}>
				<span className={classes.icon}><ion-icon name="time-outline"></ion-icon></span>
				<span>
					<h4>Delivery time:</h4>
					<p>Estimated time 25min - 30min</p>
				</span>
			</section>
			<button onClick={props.onShowPayment} className={classes.payment_btn}>Go to payment</button>

		</Modal>


	)
}

export default Checkout;