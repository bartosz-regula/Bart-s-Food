import React from 'react'
import Modal from '../../UI/Modal'
import calasses from './Checkout.module.css'

const Checkout = () => {
	return (
		<Modal>
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
				<h4>Delivery time:</h4>
				<p>Estimated time 25min - 30min</p>
				<button>Go to payment</button>
			</section>

		</Modal>
	)
}

export default Checkout;