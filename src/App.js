import React from 'react'
import { useState } from 'react'
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import Footer from './components/Footer/Footer'
import Checkout from './components/Main/Cart/Checkout'

const App = () => {

	const [checkoutIsShown, setCheckoutIsShown] = useState(false);


	const showCheckoutHandler = () => {
		setCheckoutIsShown(true);
	};

	const hideCheckoutHandler = () => {
		setCheckoutIsShown(false);
	};


	return (
		<React.Fragment>
			{checkoutIsShown && <Checkout onClose={hideCheckoutHandler} />}
			<Header />
			<main>
				<Main onShowCheckout={showCheckoutHandler} />
			</main>
			<Footer></Footer>
		</React.Fragment>
	)
}

export default App