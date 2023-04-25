import classes from './MainContainer.module.css'
import Cart from './Cart/Cart'
import MealsMenu from './Meals/MealsMenu/MealsMenu';




const MainContainer = (props) => {

	return (
		<div id="main" className={classes.main_container}>
			<MealsMenu />
			<Cart onShowCheckout={props.onShowCheckout} />
		</div>
	)
}

export default MainContainer;