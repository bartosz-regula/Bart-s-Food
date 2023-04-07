import React from 'react'
import classes from './MealsSection.module.css'
import MealsCategory from './MealsCategory';
import MealsMenu from './MealsMenu';


const MealsSection = () => {
	return (
		<div className={classes['meals-container']}>
			<MealsCategory />
			<MealsMenu></MealsMenu>
		</div>
	)
}

export default MealsSection;