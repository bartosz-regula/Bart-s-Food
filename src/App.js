import React from 'react'
import Header from './components/Header/Header'
import MealsSection from './components/MealsSection/MealsSection'
import Footer from './components/Footer/Footer'

const App = () => {
	return (
		<div>
			<Header />
			<main>
				<MealsSection />
			</main>
			<Footer></Footer>
		</div>
	)
}

export default App