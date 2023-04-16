import React from 'react'
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import Footer from './components/Footer/Footer'
import Checkout from './components/Main/Cart/Checkout'

const App = () => {
	return (
		<div>
			<Checkout />
			<Header />
			<main>
				<Main />
			</main>
			<Footer></Footer>
		</div>
	)
}

export default App