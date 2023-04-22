import React from 'react';
import classes from './MealsCategory.module.css';

const MealsCategory = ({ scrollToRef }) => {
	return (
		<div className={classes.meals_category}>
			<ul>
				<li onClick={() => scrollToRef('burgers')}>
					<a>Burgers</a></li>
				<li onClick={() => scrollToRef('pizzas')}>
					<a>Pizzas</a>
				</li>
				<li onClick={() => scrollToRef('kebabs')}>
					<a>Kebabs</a>
				</li>
				<li onClick={() => scrollToRef('wraps')}>
					<a>Wraps</a>
				</li>
				<li onClick={() => scrollToRef('pittas')}>
					<a>Pittas</a>
				</li>
				<li onClick={() => scrollToRef('sandwiches')}>
					<a>Sandwiches</a>
				</li>
				<li onClick={() => scrollToRef('beef-dogs')}>
					<a>Beef Dogs</a>
				</li>
				<li onClick={() => scrollToRef('salads')}>
					<a>Salads</a>
				</li>
				<li onClick={() => scrollToRef('soft-drinks')}>
					<a>Soft Drinks</a>
				</li>
				<li onClick={() => scrollToRef('beers')}>
					<a>Beers</a>
				</li>
				<li onClick={() => scrollToRef('kids-meal')}>
					<a>Kids Meal</a>
				</li>
				<li onClick={() => scrollToRef('piri-piri')}>
					<a>Piri Piri</a>
				</li>
				<li onClick={() => scrollToRef('dips')}>
					<a>Dips</a>
				</li>
				<li onClick={() => scrollToRef('desserts')}>
					<a>Desserts</a>
				</li>
			</ul>
		</div>
	);
};

export default MealsCategory;
