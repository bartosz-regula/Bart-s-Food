import React from 'react'
import classes from './MealsCategory.module.css'

const DUMMY_MEALS = [
	{
		id: 'c1',
		name: 'Burger',

	},
	{
		id: 'c2',
		name: 'Kebab',

	},
	{
		id: 'c3',
		name: 'Barbecue Burger',

	},
	{
		id: 'c4',
		name: 'Sides',

	},
	{
		id: 'c5',
		name: 'Dips',

	},
	{
		id: 'c7',
		name: 'Drinks',

	},
	{
		id: 'c7',
		name: 'Pizza',

	},
	{
		id: 'c8',
		name: 'Hot-Dog',

	},
];

const MealsCategory = () => {

	const mealsList = DUMMY_MEALS.map(category => (
		<li>
			<a href='#' id={category.id}>{category.name}</a>
		</li>));

	return (
		<div className={classes['meals-category']}>
			<ul>
				{mealsList}
			</ul>
		</div>
	)
}

export default MealsCategory;
