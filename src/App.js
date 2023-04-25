import React from 'react'
import { useState } from 'react'
import Header from './components/Header/Header'
import MainContainer from './components/MainSection/MainContainer'
import Footer from './components/Footer/Footer'
import Checkout
	from './components/Checkout/Checkout'
import CartProvider from './context/CartProvider'
import CartButton from './components/MainSection/Cart/CartButton'

const App = () => {

	const [checkoutIsShown, setCheckoutIsShown] = useState(false);


	const showCheckoutHandler = () => {
		setCheckoutIsShown(true);
	};

	const hideCheckoutHandler = () => {
		setCheckoutIsShown(false);
	};


	return (
		<CartProvider>
			{checkoutIsShown && <Checkout
				onClose={hideCheckoutHandler} />}
			<Header />
			{/* <CartButton /> */}
			<main>
				<MainContainer onShowCheckout={showCheckoutHandler} />
			</main>
			<Footer></Footer>
		</CartProvider>
	)
}

export default App