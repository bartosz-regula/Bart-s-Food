import { useState, useEffect } from 'react'
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
];

const MealsCategory = () => {
	const [activeCategory, setActiveCategory] = useState(null);

	const categoryList = MEALS.map((category) => (
		<li className={category.id === activeCategory ? classes.active : null}>
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
