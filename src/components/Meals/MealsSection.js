import React from 'react'
import classes from './MealsSection.module.css'
import MealsCategory from './MealsCategory';


const MealsSection = () => {
	return (
		<div className={classes['meals-container']}>
			<MealsCategory />
		</div>
	)
}

export default MealsSection;