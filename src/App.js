import React from 'react'
import { useState } from 'react'
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import Footer from './components/Footer/Footer'
import Checkout from './components/Main/Cart/Checkout'
import CartProvider from './context/CartProvider'
import CartButton from './components/Main/Cart/CartButton'

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
			{checkoutIsShown && <Checkout onClose={hideCheckoutHandler} />}
			<Header />
			<CartButton />
			<main>
				<Main onShowCheckout={showCheckoutHandler} />
			</main>
			<Footer></Footer>
		</CartProvider>
	)
}

export default App