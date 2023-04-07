import React from 'react'
import classes from './MealsSection.module.css'
import MealsCategory from './Meals/MealsCategory';
import MealsMenu from './Meals/MealsMenu';
import Cart from '../Cart/Cart'


const MealsSection = () => {
	return (
		<div className={classes['meals-container']}>
			<MealsCategory />
			<MealsMenu></MealsMenu>
			<Cart></Cart>
		</div>
	)
}

export default MealsSection;