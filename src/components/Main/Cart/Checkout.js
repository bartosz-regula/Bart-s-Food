import React from 'react'
import Modal from '../../UI/Modal'
import calasses from './Checkout.module.css'

const Checkout = (props) => {
	return (
		<>
			<Modal onClose={props.onClose}>
				<button className={calasses.close_button} onClick={props.onClose}><ion-icon name="close-outline"></ion-icon>
				</button>
				<form className={calasses.test}>
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
				<section className={calasses.delivery}>
					<span className={calasses.icon}><ion-icon name="time-outline"></ion-icon></span>
					<span>
						<h4>Delivery time:</h4>
						<p>Estimated time 25min - 30min</p>
					</span>
				</section>
				<button className={calasses.button}>Go to payment</button>

			</Modal>

		</>
	)
}

export default Checkout;