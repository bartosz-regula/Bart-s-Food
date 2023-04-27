import React from 'react'
import { useState } from 'react'
import Header from './components/Header/Header'
import MainContainer from './components/MainSection/MainContainer'
import Footer from './components/Footer/Footer'
import CartProvider from './context/CartProvider'
import Checkout
	from './components/ModalWindows/Checkout'
import Payment from './components/ModalWindows/Payment'
import Confirmation from './components/ModalWindows/Confirmation'

const App = () => {

	const [checkoutIsShown, setCheckoutIsShown] = useState(false);
	const [paymentIsShown, setPaymentIsShown] = useState(false);
	const [confirmIsShown, setConfirmIsShown] = useState(false);


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

	const approvePaymentHandler = () => {
		setPaymentIsShown(false)
		setConfirmIsShown(true)
	}

	const hideConfirmHandler = () => {
		setConfirmIsShown(false)
	}



	return (
		<CartProvider>
			{checkoutIsShown && <Checkout
				onCloseCheckout={hideCheckoutHandler}
				onShowPayment={showPaymentHandler} />}
			{paymentIsShown && <Payment
				onBack={hidePaymentHandler}
				onApprove={approvePaymentHandler} />}
			{confirmIsShown && <Confirmation
				onConfirm={hideConfirmHandler} />}
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