import React, { useState, useEffect } from 'react';
import Modal from '../UI/Modal';
import classes from '../Confirmation/Confirmation.module.css';
import Logo from '../../assets/images/bartsfood_logo_black_yellow.png'

function getCurrentTimePlus30() {
	const now = new Date();
	const futureTime = new Date(now.getTime() + 30 * 60000);
	const hours = futureTime.getHours();
	const minutes = futureTime.getMinutes() < 10 ? '0' + futureTime.getMinutes() : futureTime.getMinutes();
	return `${hours}:${minutes}`;
}

const Confirmation = (props) => {
	const [deliveryTime, setDeliveryTime] = useState('');

	useEffect(() => {
		setDeliveryTime(getCurrentTimePlus30());
	}, []);

	return (
		<Modal>
			<div className={classes.container}>
				<h1>We're Preparing Your Order!</h1>
				<p>We will deliver your order to you by <span id="specific-time">{deliveryTime}</span>.</p>
				<img className={classes.img} src={Logo} alt="Bart's Food Logo" />
			</div>
		</Modal>
	);
};

export default Confirmation;