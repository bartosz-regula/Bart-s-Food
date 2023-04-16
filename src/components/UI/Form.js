import React from 'react'
import Input from './Input'
import classes from './Form.module.css'


const Form = (props) => {
	return (
		<form className={classes.form}>
			<Input label="Amount" input={{
				id: 'amount_',
				type: 'number',
				min: '1',
				max: '12',
				step: '1',
				defaultValue: '1'
			}} />
			<button>Add</button>
		</form>)
}

export default Form