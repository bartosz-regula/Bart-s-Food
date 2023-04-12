import React from 'react'
import classes from './Summary.module.css'

const Summary = (props) => {
	return (
		<div className={classes[props.className]}>
			<span>{props.name}</span>
			<span>{props.price}</span>
		</div>
	)
}

export default Summary