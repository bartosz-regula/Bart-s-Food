import classes from './MainContainer.module.css'
import Cart from './Cart/Cart'
import MealsMenu from './Meals/MealsMenu/MealsMenu';
import CartButton from './Cart/CartButton';

const cartProps = {
	display: 'none',
}
const MainContainer = (props) => {


	return (
		<div id="main" className={classes.main_container}>
			<CartButton onShowCart={props.onShowCart} />
			<MealsMenu />
			<Cart onShowCheckout={props.onShowCheckout} onCloseCart={props.onCloseCart} {...cartProps} />
		</div>
	)
}

export default MainContainer;