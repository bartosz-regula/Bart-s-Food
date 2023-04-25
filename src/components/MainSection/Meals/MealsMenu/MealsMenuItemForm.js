import React, { useState, useRef } from 'react'
import Input from '../../../UI/Input'
import classes from './MealsMenuItemForm.module.css'


const MealsMenuItemForm = (props) => {
	const [amountIsValid, setAmountIsValid] = useState(true)
	const amountInputRef = useRef();

	const submitHandler = event => {
		event.preventDefault();

		const enteredAmount = amountInputRef.current.value;
		const enteredAmountNumber = +enteredAmount

		if (enteredAmount.trim().length === 0 || enteredAmountNumber < 1 ||
			enteredAmountNumber > 5) {
			setAmountIsValid(false);
			return;
		}

		props.onAddToCart(enteredAmountNumber)
	};

	return (
		<form className={classes.form} onSubmit={submitHandler}>
			<Input
				ref={amountInputRef}
				label="Amount"
				input={{
					id: 'amount_',
					type: 'number',
					min: '1',
					max: '5',
					step: '1',
					defaultValue: '1'
				}} />
			{!amountIsValid && <p>Pelase enter a valid amount (1-5)</p>}
			<button className={classes.add_btn}>Add</button>
		</form>)
}

export default MealsMenuItemForm;