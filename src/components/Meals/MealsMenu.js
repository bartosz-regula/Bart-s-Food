import React from 'react'
import classes from './MealsMenu.module.css';

const MealsMenu = () => {
	return (
		<div className={classes.container}>
			<div className={classes.card}>
				<div className={classes.meal}>
					<h3>All larege pizza</h3>
					<p>Large pizza just for £12 each</p>
					<div className={classes.price}>from £12</div>
				</div>
				<form className={classes.form}>
					<label>Amount</label>
					<input
						type='number'
						min='1'
						max='12'
						step='1'
						defaultValue='1' />
					<button>Add</button>
				</form>
			</div>
		</div>
	)
}

export default MealsMenu