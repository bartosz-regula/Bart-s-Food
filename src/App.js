import React from 'react'
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import Footer from './components/Footer/Footer'

const App = () => {
	return (
		<div>
			<Header />
			<main>
				<Main />
			</main>
			<Footer></Footer>
		</div>
	)
}

export default App