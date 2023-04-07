import React from 'react'
import classes from './MealsMenu.module.css';

const DUMMY_MEALS = [
	{
		id: 'm1',
		name: 'Burger',
		description: 'Fresh Burger',
		price: '£15'
	},
	{
		id: 'm2',
		name: 'Pizza',
		description: 'Delicious Pizza',
		price: '£22'
	},
	{
		id: 'm3',
		name: 'Kebab',
		description: 'Wrap Doner Kebabr',
		price: '£30'
	},
	{
		id: 'm4',
		name: 'Vegan Burger',
		description: 'Testy Vegan Burger',
		price: '£25'
	},
	{
		id: 'm5',
		name: 'Cheeseburger',
		description: 'Fresh Cheeseburger',
		price: '£5'
	},
]

const MealsMenu = () => {

	const mealsList = DUMMY_MEALS.map(meal => (
		<div className={classes.card}>
			<div className={classes.meal}>
				<h3>{meal.name}</h3>
				<p>{meal.description}</p>
				<div className={classes.price}>from {meal.price}</div>
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
	));


	return (
		<div className={classes.container}>
			{mealsList}
		</div>
	)
}

export default MealsMenu