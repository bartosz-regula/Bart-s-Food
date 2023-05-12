
import React, { useState, useEffect } from 'react';
import classes from './MealsCategory.module.css';

const MealsCategory = () => {
	const [activeId, setActiveId] = useState(null);

	const handleClick = (id) => {
		setActiveId(id);
		const element = document.getElementById(id);
		const offset = -20;
		const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
		const offsetPosition = elementPosition + offset;
		window.scrollTo({ top: offsetPosition, behavior: "smooth" });
	};
	useEffect(() => {
		const handleScroll = () => {
			const sectionIds = ['burgers', 'pizzas', 'kebabs', 'wraps', 'pittas', 'sandwiches', 'beef-dogs', 'salads', 'soft-drinks', 'beers', 'kids-meal', 'piri-piri', 'dips', 'desserts'];
			const scrollPosition = window.scrollY + window.innerHeight * (-0.95);
			let currentActiveId = null;

			sectionIds.forEach((id) => {
				const section = document.getElementById(id);
				if (section.offsetTop <= scrollPosition) {
					currentActiveId = id;
				}
			});

			setActiveId(currentActiveId);
		};


		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		}
	}, []);

	return (
		<div className={classes.meals_category}>
			<ul>
				<li onClick={() => handleClick('burgers')} className={activeId === 'burgers' ? classes.active : ''}>
					Burgers
				</li>
				<li onClick={() => handleClick('pizzas')} className={activeId === 'pizzas' ? classes.active : ''}>
					Pizzas
				</li>
				<li onClick={() => handleClick('kebabs')} className={activeId === 'kebabs' ? classes.active : ''}>
					Kebabs
				</li>
				<li onClick={() => handleClick('wraps')} className={activeId === 'wraps' ? classes.active : ''}>
					Wraps
				</li>
				<li onClick={() => handleClick('pittas')} className={activeId === 'pittas' ? classes.active : ''}>
					Pittas
				</li>
				<li onClick={() => handleClick('sandwiches')} className={activeId === 'sandwiches' ? classes.active : ''}>
					Sandwiches
				</li>
				<li onClick={() => handleClick('beef-dogs')} className={activeId === 'beef-dogs' ? classes.active : ''}>
					Beef Dogs
				</li>
				<li onClick={() => handleClick('salads')} className={activeId === 'salads' ? classes.active : ''}>
					Salads
				</li>
				<li onClick={() => handleClick('soft-drinks')} className={activeId === 'soft-drinks' ? classes.active : ''}>
					Soft Drinks
				</li>
				<li onClick={() => handleClick('beers')} className={activeId === 'beers' ? classes.active : ''}>
					Beers
				</li>
				<li onClick={() => handleClick('kids-meal')} className={activeId === 'kids-meal' ? classes.active : ''}>
					Kids Meal
				</li>
				<li onClick={() => handleClick('piri-piri')} className={activeId === 'piri-piri' ? classes.active : ''}>
					Piri Piri
				</li>
				<li onClick={() => handleClick('dips')} className={activeId === 'dips' ? classes.active : ''}>
					Dips
				</li>
				<li onClick={() => handleClick('desserts')} className={activeId === 'desserts' ? classes.active : ''}>
					Desserts
				</li>

			</ul>
		</div>
	);
};

export default MealsCategory;

