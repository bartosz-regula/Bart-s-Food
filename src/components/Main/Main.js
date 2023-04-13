import React, { useEffect, useState } from 'react'
import classes from './Main.module.css'
import MealsCategory from './Meals/MealsCategory';
import MealsMenu from './Meals/MealsMenu';
import Cart from './Cart/Cart'




const Main = () => {

	return (
		<div className={classes['main-container']}>
			<MealsCategory />
			<MealsMenu />
			<Cart></Cart>
		</div>
	)
}

export default Main;