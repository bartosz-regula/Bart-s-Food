
import React, { useRef, useState, useEffect } from 'react';
import Modal from '../ModalWindows/Modal';
import classes from './Checkout.module.css';

const isEmpty = value => value.trim() === '';
const isSevenChars = value => value.trim().length === 7;
const isTenChars = value => value.trim().length === 10;

const handleName = (event) => {
	let enteredName = event.target.value.replace(/[^A-Za-z\s]/g, '');
	event.target.value = enteredName;
};

const handleMobile = (event) => {
	let enteredMobile = event.target.value.replace(/[^0-9]/g, '').slice(0, 10);
	event.target.value = enteredMobile;
};

const handleStreet = (event) => {
	let enteredStreet = event.target.value.replace(/[^\w\s.,\-/]/g, '');
	event.target.value = enteredStreet;
};

const handleCity = (event) => {
	let enteredCity = event.target.value.replace(/[^A-Za-z\s]/g, '');
	event.target.value = enteredCity;
};

const handlePostCode = (event) => {
	let enteredPostCode = event.target.value.replace(/[^\w\s.,\-/]/g, '').slice(0, 7);
	event.target.value = enteredPostCode;
};

const Checkout = (props) => {
	const modalRef = useRef();
	const nameInputRef = useRef();
	const mobileInputRef = useRef();
	const streetInputRef = useRef();
	const cityInputRef = useRef();
	const postCodeInputRef = useRef();

	useEffect(() => {
		function handleClickOutside(event) {
			if (modalRef.current && !modalRef.current.contains(event.target)) {
				props.onCloseCheckout();
			}
		}

		document.addEventListener('mousedown', handleClickOutside);

		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, [props]);

	useEffect(() => {
		function handleEscKeyPress(event) {
			if (event.key === 'Escape') {
				props.onCloseCheckout();
			}
		}

		window.addEventListener('keydown', handleEscKeyPress);

		return () => {
			window.removeEventListener('keydown', handleEscKeyPress);
		};
	}, [props]);

	useEffect(() => {
		function handleEnterKeyPress(event) {
			if (event.key === 'Enter') {
				confirmHandler();
			}
		}

		window.addEventListener('keydown', handleEnterKeyPress);

		return () => {
			window.removeEventListener('keydown', handleEnterKeyPress);
		};
	}, []);

	useEffect(() => {
		const storedName = localStorage.getItem('name');
		const storedMobile = localStorage.getItem('mobile');
		const storedStreet = localStorage.getItem('street');
		const storedCity = localStorage.getItem('city');
		const storedPostCode = localStorage.getItem('postCode');

		if (storedName) {
			nameInputRef.current.value = storedName;
		}
		if (storedMobile) {
			mobileInputRef.current.value = storedMobile;
		}
		if (storedStreet) {
			streetInputRef.current.value = storedStreet;
		}
		if (storedCity) {
			cityInputRef.current.value = storedCity;
		}
		if (storedPostCode) {
			postCodeInputRef.current.value = storedPostCode;
		}
	}, []);

	const [formInputsValidity, setFormInputsValidity] = useState({
		name: true,
		mobile: true,
		street: true,
		city: true,
		postCode: true
	});

	const confirmHandler = (event) => {
		if (event) {
			event.preventDefault();
		}

		const enteredName = nameInputRef.current.value;
		const enteredMobile = mobileInputRef.current.value;
		const enteredStreet = streetInputRef.current.value;
		const enteredCity = cityInputRef.current.value;
		const enteredPostCode = postCodeInputRef.current.value;

		const enteredNameIsValid = !isEmpty(enteredName);
		const enteredMobileIsValid = isTenChars(enteredMobile);
		const enteredStreetIsValid = !isEmpty(enteredStreet);
		const enteredCityIsValid = !isEmpty(enteredCity);
		const enteredPostCodeIsValid = isSevenChars(enteredPostCode);

		setFormInputsValidity({
			name: enteredNameIsValid,
			mobile: enteredMobileIsValid,
			street: enteredStreetIsValid,
			city: enteredCityIsValid,
			postCode: enteredPostCodeIsValid
		});

		const formIsValid =
			enteredNameIsValid &&
			enteredMobileIsValid &&
			enteredStreetIsValid &&
			enteredCityIsValid &&
			enteredPostCodeIsValid;

		if (formIsValid) {
			localStorage.setItem('name', enteredName);
			localStorage.setItem('mobile', enteredMobile);
			localStorage.setItem('street', enteredStreet);
			localStorage.setItem('city', enteredCity);
			localStorage.setItem('postCode', enteredPostCode);

			props.onShowPayment();
			return;
		}
	};

	const nameControlClasses = `${classes.control} ${formInputsValidity.name ? '' : classes.invalid
		}`;
	const mobileControlClasses = `${classes.control} ${formInputsValidity.mobile ? '' : classes.invalid
		}`;
	const streetControlClasses = `${classes.control} ${formInputsValidity.street ? '' : classes.invalid
		}`;
	const cityControlClasses = `${classes.control} ${formInputsValidity.city ? '' : classes.invalid
		}`;
	const postCodeControlClasses = `${classes.control} ${formInputsValidity.postCode ? '' : classes.invalid
		}`;


	return (
		<Modal onClose={props.onClose}>
			<div ref={modalRef} className={classes.container}>
				<button className={classes.close_btn} onClick={props.onCloseCheckout}>
					<ion-icon name="close-outline"></ion-icon>
				</button>
				<form className={classes.form}>
					<h2>Confirm your details!</h2>
					<div className={nameControlClasses}>
						<input
							type="text"
							placeholder="Your Name"
							onChange={handleName}
							ref={nameInputRef}
						/>
						{!formInputsValidity.name && <p>The name can't be empty!</p>}
					</div>
					<div className={mobileControlClasses}>
						<input
							type="tel"
							maxLength="10"
							id="phone"
							placeholder="Mobile number"
							onChange={handleMobile}
							ref={mobileInputRef}
						/>
						{!formInputsValidity.mobile && (
							<p>The mobile number must be exactly 10 digits long!</p>
						)}
					</div>
					<div className={streetControlClasses}>
						<input
							type="text"
							id="Street"
							placeholder="Street"
							onChange={handleStreet}
							ref={streetInputRef}
						/>
						{!formInputsValidity.street && <p>The street can't be empty!</p>}
					</div>
					<div className={cityControlClasses}>
						<input type="text"
							id="city"
							placeholder="City"
							onChange={handleCity}
							ref={cityInputRef}
						/>
						{!formInputsValidity.city && <p>The city can't be empty!</p>}
					</div>
					<div className={postCodeControlClasses}>
						<input
							type="text"
							id="postcode"
							placeholder="Postcode"
							onChange={handlePostCode}
							ref={postCodeInputRef}
						/>
						{!formInputsValidity.postCode && (
							<p>The postcode must be exactly 7 characters long!</p>
						)}
					</div>
				</form>
				<section className={classes.delivery}>
					<span className={classes.icon}>
						<ion-icon name="time-outline"></ion-icon>
					</span>
					<span>
						<h4>Delivery time:</h4>
						<p>Estimated time: 35min - 50min</p>
					</span>
				</section>
				<button onClick={confirmHandler} className={classes.payment_btn}>
					Go to payment
				</button>
			</div>
		</Modal>

	);
};

export default Checkout;