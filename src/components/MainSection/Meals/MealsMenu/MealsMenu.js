import React from 'react'
import MealsMenuCategory from './MealsMenuCategory'
import { useRef } from 'react';
import MealsCategory from '../MealsCategory/MealsCategory';
import classes from './MealsMenu.module.css'



const MealsMenu = () => {
	const burgersRef = useRef(null);
	const pizzaRef = useRef(null);
	const kebabRef = useRef(null);
	const wrapsRef = useRef(null);
	const pittasRef = useRef(null);
	const sandwichesRef = useRef(null);
	const beefDogsRef = useRef(null);
	const saladsRef = useRef(null);
	const softDrinksRef = useRef(null);
	const beersRef = useRef(null);
	const kidsMealRef = useRef(null);
	const piriPiriRef = useRef(null);
	const dipsRef = useRef(null);
	const dessertsRef = useRef(null);


	const scrollToRef = (id) => {
		switch (id) {
			case "burgers":
				const burgersScrollPosition = burgersRef.current.offsetTop - 20;
				window.scrollTo({ top: burgersScrollPosition, behavior: "smooth" });
				break;
			case "pizzas":
				const pizzasScrollPosition = pizzaRef.current.offsetTop - 20;
				window.scrollTo({ top: pizzasScrollPosition, behavior: "smooth" });
				break;
			case "kebabs":
				const kebabsScrollPosition = kebabRef.current.offsetTop - 20;
				window.scrollTo({ top: kebabsScrollPosition, behavior: "smooth" });
				break;
			case "wraps":
				const wrapsScrollPosition = wrapsRef.current.offsetTop - 20;
				window.scrollTo({ top: wrapsScrollPosition, behavior: "smooth" });
				break;
			case "pittas":
				const pittasScrollPosition = pittasRef.current.offsetTop - 20;
				window.scrollTo({ top: pittasScrollPosition, behavior: "smooth" });
				break;
			case "sandwiches":
				const sandwichesScrollPosition = sandwichesRef.current.offsetTop - 20;
				window.scrollTo({ top: sandwichesScrollPosition, behavior: "smooth" });
				break;
			case "beef-dogs":
				const beefDogsScrollPosition = beefDogsRef.current.offsetTop - 20;
				window.scrollTo({ top: beefDogsScrollPosition, behavior: "smooth" });
				break;
			case "salads":
				const saladsScrollPosition = saladsRef.current.offsetTop - 20;
				window.scrollTo({ top: saladsScrollPosition, behavior: "smooth" });
				break;
			case "soft-drinks":
				const softDrinksScrollPosition = softDrinksRef.current.offsetTop - 20;
				window.scrollTo({ top: softDrinksScrollPosition, behavior: "smooth" });
				break;
			case "beers":
				const beersScrollPosition = beersRef.current.offsetTop - 20;
				window.scrollTo({ top: beersScrollPosition, behavior: "smooth" });
				break;
			case "kids-meal":
				const kidsMealScrollPosition = kidsMealRef.current.offsetTop - 20;
				window.scrollTo({ top: kidsMealScrollPosition, behavior: "smooth" });
				break;
			case "piri-piri":
				const piriPiriScrollPosition = piriPiriRef.current.offsetTop - 20;
				window.scrollTo({ top: piriPiriScrollPosition, behavior: "smooth" });
				break;
			case "dips":
				const dipsScrollPosition = dipsRef.current.offsetTop - 20;
				window.scrollTo({ top: dipsScrollPosition, behavior: "smooth" });
				break;
			case "desserts":
				const dessertsScrollPosition = dessertsRef.current.offsetTop - 20;
				window.scrollTo({ top: dessertsScrollPosition, behavior: "smooth" });
				break;
			default:
				break;
		}
	};

	return (
		<div className={classes.meals_container}>
			<span >
				<MealsCategory scrollToRef={scrollToRef} />
			</span>
			<span>
				<div id="burgers" ref={burgersRef}>
					<MealsMenuCategory category="Burgers" />
				</div>
				<div id="pizzas" ref={pizzaRef}>
					<MealsMenuCategory category="Pizzas" />
				</div>
				<div id="kebabs" ref={kebabRef}>
					<MealsMenuCategory category="Kebabs" />
				</div>
				<div id="wraps" ref={wrapsRef}>
					<MealsMenuCategory category="Wraps" />
				</div>
				<div id="pittas" ref={pittasRef}>
					<MealsMenuCategory category="Pittas" />
				</div>
				<div id="sandwiches" ref={sandwichesRef}>
					<MealsMenuCategory category="Sandwiches" />
				</div>
				<div id="beef-dogs" ref={beefDogsRef}>
					<MealsMenuCategory category="Beef Dogs" />
				</div>
				<div id="salads" ref={saladsRef}>
					<MealsMenuCategory category="Salads" />
				</div>
				<div id="soft-drinks" ref={softDrinksRef}>
					<MealsMenuCategory category="Soft Drinks" />
				</div>
				<div id="beers" ref={beersRef}>
					<MealsMenuCategory category="Beers" />
				</div>
				<div id="kids-meal" ref={kidsMealRef}>
					<MealsMenuCategory category="Kids Meal" />
				</div>
				<div id="piri-piri" ref={piriPiriRef}>
					<MealsMenuCategory category="Piri Piri" />
				</div>
				<div id="dips" ref={dipsRef}>
					<MealsMenuCategory category="Dips" />
				</div>
				<div id="desserts" ref={dessertsRef}>
					<MealsMenuCategory category="Desserts" />
				</div>
			</span>
		</div>
	)
}

export default MealsMenu;