import { useState, useEffect, useRef } from 'react'
import React from 'react'
import classes from './MealsCategory.module.css'

const MEALS = [
	{
		id: '#Burgers',
		name: 'Burgers',

	},
	{
		id: '#Pizzas',
		name: 'Pizzas',

	},
	{
		id: '#Kebabs',
		name: 'Kebabs',

	},
	{
		id: '#Wraps',
		name: 'Wraps',

	},
	{
		id: '#Pittas',
		name: 'Pittas',

	},
	{
		id: '#Sandwiches',
		name: 'Sandwiches',

	},
	{
		id: '#Beef Dogs',
		name: 'Beef Dogs',

	},
	{
		id: '#Salads',
		name: 'Salads',

	},
	{
		id: '#Kids Meal',
		name: 'Kids Meal',

	},
	{
		id: '#Piri Piri',
		name: 'Piri Piri',

	},
	{
		id: '#Dips',
		name: 'Dips',

	},
	{
		id: '#Soft Drinks',
		name: 'Soft Drinks',

	},
	{
		id: '#Beers',
		name: 'Beers',

	},
	{
		id: '#Desserts',
		name: 'Desserts',

	},
];

const MealsCategory = () => {
	const [activeCategory, setActiveCategory] = useState('');

	const categoryList = MEALS.map((category) => (
		<li className={category.id === activeCategory ? classes.active : ''} key={category.id}>
			<a href={category.id} onClick={() => setActiveCategory(category.id)}>
				{category.name}
			</a>
		</li>
	));

	return (
		<div className={classes.meals_category}>
			<ul>{categoryList}</ul>
		</div>
	);
};

export default MealsCategory;
