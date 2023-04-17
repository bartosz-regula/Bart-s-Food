import classes from './Main.module.css'
import MealsCategory from './Meals/MealsCategory';
import MealsMenu from './Meals/MealsMenu';
import Cart from './Cart/Cart'




const Main = (props) => {

	return (
		<div className={classes['main-container']}>
			<MealsCategory />
			<MealsMenu />
			<Cart onShowCheckout={props.onShowCheckout} />
		</div>
	)
}

export default Main;