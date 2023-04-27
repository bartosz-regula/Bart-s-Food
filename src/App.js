import React from 'react'
import { useState, useContext } from 'react'
import Header from './components/Header/Header'
import MainContainer from './components/MainSection/MainContainer'
import Footer from './components/Footer/Footer'
import CartProvider from './context/CartProvider'
import Checkout
	from './components/Checkout/Checkout'
import Payment from './components/Payment/Payment'
import Confirmation from './components/Confirmation/Confirmation'

const App = () => {

	const [checkoutIsShown, setCheckoutIsShown] = useState(false);
	const [paymentIsShown, setPaymentIsShown] = useState(false);


	const showCheckoutHandler = () => {
		setCheckoutIsShown(true);
	};

	const hideCheckoutHandler = () => {
		setCheckoutIsShown(false);
	};
	const showPaymentHandler = () => {
		setPaymentIsShown(true)
		setCheckoutIsShown(false);
	};

	const hidePaymentHandler = () => {
		setPaymentIsShown(false)
		setCheckoutIsShown(true);
	};

	const confirmPayment = () => {
		setPaymentIsShown(false)


	}

	return (
		<CartProvider>
			{checkoutIsShown && <Checkout
				onCloseCheckout={hideCheckoutHandler}
				onShowPayment={showPaymentHandler} />}
			{paymentIsShown && <Payment
				onBack={hidePaymentHandler}
				onConfirm={confirmPayment} />}
			{/* <Confirmation /> */}
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