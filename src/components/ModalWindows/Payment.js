import React from 'react'
import Modal from '../ModalWindows/Modal'
import classes from './Payment.module.css'
import paymentCard from '../../assets/images/paymentCard.png'
import paymentOperators from '../../assets/images/paymentsOperators.png'



const Payment = (props) => {


	return (
		<Modal >
			<div className={classes.container}>
				<div>
					<button onClick={props.onBack} className={classes.back_btn}><ion-icon name="chevron-back-outline"></ion-icon>
					</button>
				</div>
				<div className={classes.card_img_container}>
					<img src={paymentCard} alt='Payment card'></img>
				</div>
				<div className={classes.operators_img_container}>
					<img src={paymentOperators} alt='Payment operators'></img>
				</div>
				<form className={classes.form}>
					<div>
						<input type='number' placeholder="CARD NUMBER"></input>
						<input type='text' placeholder="CARD HOLDER NAME"></input>
					</div>
					<div className={classes.card_exp_container}>
						<input type='number' placeholder="MM"></input>
						<input type='number' placeholder="YY"></input>
						<input type='number' placeholder="CCV"></input>
					</div>
				</form>
				<button onClick={props.onApprove} className={classes.payment_btn}>Confirm Payment
				</button>
			</div>
		</Modal>
	)
}

export default Payment;