import React, { useState, useEffect, useContext } from 'react';
import CartContext from "../../context/cart-context";

import Modal from '../ModalWindows/Modal';
import classes from '../ModalWindows/Confirmation.module.css';
import Logo from '../../assets/images/bartsfood_logo_black_yellow.png'

function getCurrentTimePlus50() {
	const now = new Date();
	const futureTime = new Date(now.getTime() + 50 * 60000);
	const hours = futureTime.getHours();
	const minutes = futureTime.getMinutes() < 10 ? '0' + futureTime.getMinutes() : futureTime.getMinutes();
	return `${hours}:${minutes}`;
}

const Confirmation = (props) => {
	const [deliveryTime, setDeliveryTime] = useState('');
	const cartCtx = useContext(CartContext);

	const closeConfirmation = () => {
		props.onConfirm()
		cartCtx.clearCart();
	}

	useEffect(() => {
		setDeliveryTime(getCurrentTimePlus50());
	}, []);

	return (
		<Modal>
			<div className={classes.container}>
				<div className={classes.container_content}>
					<h2>Payment Approved!</h2>
					<p>Thank you for choosing our restaurant for your meal! </p>
					<img className={classes.img} src={Logo} alt="Bart's Food Logo" />
					<p>Your order will be delivered to you by <span className={classes.time}>{deliveryTime}</span>.</p>
				</div>
				<div>
					<button onClick={closeConfirmation} className={classes.ok_btn}>OK</button>
				</div>
			</div>
		</Modal>
	);
};

export default Confirmation;