import classes from './Main.module.css'
import MealsCategory from './Meals/MealsCategory';
import Cart from './Cart/Cart'
import MealsMenu from './Meals/MealsMenu';




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