

import React from 'react'
import MealsMenuCategory from './MealsMenuCategory'
import MealsCategory from '../MealsCategory/MealsCategory';
import classes from './MealsMenu.module.css'


const MealsMenu = () => {


	return (
		<div className={classes.meals_container}>

			<span >
				<MealsCategory />
			</span>

			<span className={classes.menu_container}>
				<div id="burgers" >
					<MealsMenuCategory category="Burgers" />
				</div>
				<div id="pizzas" >
					<MealsMenuCategory category="Pizzas" />
				</div>
				<div id="kebabs" >
					<MealsMenuCategory category="Kebabs" />
				</div>
				<div id="wraps" >
					<MealsMenuCategory category="Wraps" />
				</div>
				<div id="pittas" >
					<MealsMenuCategory category="Pittas" />
				</div>
				<div id="sandwiches" >
					<MealsMenuCategory category="Sandwiches" />
				</div>
				<div id="beef-dogs" >
					<MealsMenuCategory category="Beef Dogs" />
				</div>
				<div id="salads" >
					<MealsMenuCategory category="Salads" />
				</div>
				<div id="soft-drinks" >
					<MealsMenuCategory category="Soft Drinks" />
				</div>
				<div id="beers" >
					<MealsMenuCategory category="Beers" />
				</div>
				<div id="kids-meal" >
					<MealsMenuCategory category="Kids Meal" />
				</div>
				<div id="piri-piri" >
					<MealsMenuCategory category="Piri Piri" />
				</div>
				<div id="dips" >
					<MealsMenuCategory category="Dips" />
				</div>
				<div id="desserts" >
					<MealsMenuCategory category="Desserts" />
				</div>
			</span>
		</div>
	)
}

export default MealsMenu;