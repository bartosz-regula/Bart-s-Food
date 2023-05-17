import React, { useState, useRef, useEffect } from 'react'
import Modal from '../ModalWindows/Modal'
import classes from './Payment.module.css'
import paymentCard from '../../assets/images/paymentCard.png'
import paymentOperators from '../../assets/images/paymentsOperators.png'

const isEmpty = value => value.trim() === '';
const isSixteenChars = value => value.trim().length === 19;
const isUnderTwelve = value => value.trim() <= 12 && value.trim() > 0;
const expYear = value => value.trim() >= 23 && value.trim() <= 33;
const ccvValid = value => value.trim().length === 3

const handleCardNumberChange = (event) => {
	let enteredCardNumber = event.target.value.replace(/\D/g, '');
	enteredCardNumber = enteredCardNumber.replace(/(.{4})/g, '$1 ');
	enteredCardNumber = enteredCardNumber.trim();

	event.target.value = enteredCardNumber;
};

const handleCardHolderChange = (event) => {
	let enteredCardName = event.target.value.replace(/[^A-Za-z\s]/g, '');
	event.target.value = enteredCardName;
};

const handleCcvChange = (event) => {
	let enteredCcv = event.target.value.replace(/\D/g, ''); // 
	event.target.value = enteredCcv;
};


const Payment = (props) => {

	const modalRef = useRef();

	useEffect(() => {
		function handleClickOutside(event) {
			if (modalRef.current && !modalRef.current.contains(event.target)) {
				props.onBack();
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
				props.onBack();
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

	const [formInputsValidity, setFormInputsValidity] = useState({

		cardNumber: true,
		cardHolder: true,
		moth: true,
		year: true,
		ccv: true

	});

	const cardNumberInputRef = useRef();
	const cardHolderInputRef = useRef();
	const mothInputRef = useRef();
	const yearInputRef = useRef();
	const ccvInputRef = useRef();

	const confirmHandler = (event) => {
		if (event) {
			event.preventDefault();
		}

		const enteredCardNumber = (cardNumberInputRef.current.value);
		const enteredCardHolder = cardHolderInputRef.current.value;
		const enteredMonth = mothInputRef.current.value;
		const enteredYear = yearInputRef.current.value;
		const enteredCcv = ccvInputRef.current.value;

		const enteredCardNumberIsValid = isSixteenChars(enteredCardNumber)
		const enteredCardHolderIsValid = !isEmpty(enteredCardHolder)
		const enteredMonthIsValid = isUnderTwelve(enteredMonth)
		const enteredYearIsValid = expYear(enteredYear)
		const enteredCcvIsValid = ccvValid(enteredCcv)

		setFormInputsValidity({
			cardNumber: enteredCardNumberIsValid,
			cardHolder: enteredCardHolderIsValid,
			moth: enteredMonthIsValid,
			year: enteredYearIsValid,
			ccv: enteredCcvIsValid
		});

		const formIsValid =
			enteredCardNumberIsValid &&
			enteredCardHolderIsValid &&
			enteredMonthIsValid &&
			enteredYearIsValid &&
			enteredCcvIsValid

		if (formIsValid) {
			props.onApprove()
			return;
		}
	};

	const cardNumberControlClasses = `${classes.control} ${formInputsValidity.cardNumber ? '' : classes.invalid}`
	const cardHolderControlClasses = `${classes.control} ${formInputsValidity.cardHolder ? '' : classes.invalid}`
	const mothControlClasses = `${classes.control} ${formInputsValidity.moth ? '' : classes.invalid}`
	const yearControlClasses = `${classes.control} ${formInputsValidity.year ? '' : classes.invalid}`
	const ccvCodeControlClasses = `${classes.control} ${formInputsValidity.ccv ? '' : classes.invalid}`


	return (
		<Modal className={classes.modal} >
			<div ref={modalRef} className={classes.main_container}>
				<div>
					<button onClick={props.onBack} className={classes.back_btn}><ion-icon name="chevron-back-outline"></ion-icon>
					</button>
				</div>
				<div className={classes.card_container}>
					<img src={paymentCard} alt='Payment card'></img>
				</div>
				<div className={classes.operators_container}>
					<img src={paymentOperators} alt='Payment operators'></img>
				</div>


				<form className={classes.form_container}>
					<div className={classes.form_container_top}>
						<div className={cardNumberControlClasses}>
							<input
								type='text'
								placeholder="CARD NUMBER"
								maxLength="19"
								ref={cardNumberInputRef}
								onChange={handleCardNumberChange}
								inputMode="numeric"
							/>
							{!formInputsValidity.cardNumber && <p> Invalid card number! Must be exactly 16 digits long. </p>}
						</div>
						<div className={cardHolderControlClasses}>
							<input
								type='text'
								placeholder="CARD HOLDER NAME"
								ref={cardHolderInputRef}
								onChange={handleCardHolderChange}
							/>
							{!formInputsValidity.cardHolder && <p> The Card Holder can't be empty!</p>}
						</div>
					</div>
					<div className={classes.card_exp_container}>
						<div className={mothControlClasses}>
							<select id="month" name="month" ref={mothInputRef}>
								<option value="" disabled selected >MM</option>
								<option value="1">01</option>
								<option value="2">02</option>
								<option value="3">03</option>
								<option value="4">04</option>
								<option value="5">05</option>
								<option value="6">06</option>
								<option value="7">07</option>
								<option value="8">08</option>
								<option value="9">09</option>
								<option value="10">10</option>
								<option value="11">11</option>
								<option value="12">12</option>
							</select>
							{!formInputsValidity.moth && <p> Choose month!</p>}
						</div>
						<div className={yearControlClasses}>
							<select className={classes.select} id="year" name="year" ref={yearInputRef}>
								<option value="" disabled selected>YY</option>
								<option value="23">23</option>
								<option value="24">24</option>
								<option value="25">25</option>
								<option value="26">26</option>
								<option value="27">27</option>
								<option value="28">28</option>
								<option value="29">29</option>
								<option value="30">30</option>
								<option value="31">31</option>
								<option value="32">32</option>
								<option value="33">33</option>
							</select>
							{!formInputsValidity.year && <p> Choose year!</p>}
						</div>

						<div className={ccvCodeControlClasses}>
							<input
								type='tel'
								maxLength="3"
								placeholder="CCV"
								ref={ccvInputRef}
								onChange={handleCcvChange}
							/>
							{!formInputsValidity.ccv && <p> Enter CCV code!</p>}
						</div>
					</div>
				</form>
				<button onClick={confirmHandler} className={classes.payment_btn}>Confirm Payment
				</button>
			</div>
		</Modal>
	)
}

export default Payment;


