import React from 'react'
import classes from './MealsCategory.module.css'

const MEALS = [
	{
		id: 'c1',
		name: 'Burgers',

	},
	{
		id: 'c2',
		name: 'Pizzas',

	},
	{
		id: 'c3',
		name: 'Kebabs',

	},
	{
		id: 'c4',
		name: 'Wraps',

	},
	{
		id: 'c5',
		name: 'Pittas',

	},
	{
		id: 'c7',
		name: 'Sandwiches',

	},
	{
		id: 'c7',
		name: 'Beef Dogs',

	},
	{
		id: 'c8',
		name: 'Salads',

	},
];

const MealsCategory = (props) => {

	const categoryList = MEALS.map(category => (
		<li>
			<a href='#' id={category.id}>{category.name}</a>
		</li>));


	return (
		<div className={classes.meals_category}>
			<ul>
				{categoryList}
			</ul>
		</div>
	)
}

export default MealsCategory;


/*
href="#starters"
scrollactive item

<h2 id="starters"
*/