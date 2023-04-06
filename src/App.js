import React from 'react'
import Header from './components/Header/Header'
import MealsSection from './components/Meals/MealsSection'

const App = () => {
	return (
		<div>
			<Header />
			<main>
				<MealsSection />
			</main>
		</div>
	)
}

export default App