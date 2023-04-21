import { useState, useEffect, useRef } from 'react';
import React from 'react';
import classes from './MealsCategory.module.css';

const MealsCategory = ({ scrollToRef }) => {
	return (
		<div className={classes.meals_category}>
			<ul>
				<li onClick={() => scrollToRef('burgers')}>Burgers</li>
				<li onClick={() => scrollToRef('pizzas')}>Pizzas</li>
				<li onClick={() => scrollToRef('kebabs')}>Kebabs</li>
				<li onClick={() => scrollToRef('wraps')}>Wraps</li>
				<li onClick={() => scrollToRef('pittas')}>Pittas</li>
				<li onClick={() => scrollToRef('sandwiches')}>Sandwiches</li>
				<li onClick={() => scrollToRef('beef-dogs')}>Beef Dogs</li>
				<li onClick={() => scrollToRef('salads')}>Salads</li>
				<li onClick={() => scrollToRef('soft-drinks')}>Soft Drinks</li>
				<li onClick={() => scrollToRef('beers')}>Beers</li>
				<li onClick={() => scrollToRef('desserts')}>Desserts</li>
				<li onClick={() => scrollToRef('kids-meal')}>Kids Meal</li>
				<li onClick={() => scrollToRef('piri-piri')}>Piri Piri</li>
				<li onClick={() => scrollToRef('dips')}>Dips</li>
			</ul>
		</div>
	);
};

export default MealsCategory;
