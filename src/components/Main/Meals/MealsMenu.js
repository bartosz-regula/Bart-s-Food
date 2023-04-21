import React from 'react'
import MealsMenuCategory from './MealsMenuCategory'
import { useRef } from 'react';
import MealsCategory from './MealsCategory';
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
	const beersRef = useRef(null);
	const softDrinksRef = useRef(null);
	const dessertsRef = useRef(null);
	const kidsMealRef = useRef(null);
	const piriPiriRef = useRef(null);
	const dipsRef = useRef(null);

	const scrollToRef = (id) => {
		switch (id) {
			case "burgers":
				burgersRef.current.scrollIntoView({ behavior: "smooth" });
				break;
			case "pizzas":
				pizzaRef.current.scrollIntoView({ behavior: "smooth" });
				break;
			case "kebabs":
				kebabRef.current.scrollIntoView({ behavior: "smooth" });
				break;
			case "wraps":
				wrapsRef.current.scrollIntoView({ behavior: "smooth" });
				break;
			case "pittas":
				pittasRef.current.scrollIntoView({ behavior: "smooth" });
				break;
			case "sandwiches":
				sandwichesRef.current.scrollIntoView({ behavior: "smooth" });
				break;
			case "beef-dogs":
				beefDogsRef.current.scrollIntoView({ behavior: "smooth" });
				break;
			case "salads":
				saladsRef.current.scrollIntoView({ behavior: "smooth" });
				break;
			case "soft-drinks":
				softDrinksRef.current.scrollIntoView({ behavior: "smooth" });
				break;
			case "beers":
				beersRef.current.scrollIntoView({ behavior: "smooth" });
				break;
			case "desserts":
				dessertsRef.current.scrollIntoView({ behavior: "smooth" });
				break;
			case "kids-meal":
				kidsMealRef.current.scrollIntoView({ behavior: "smooth" });
				break;
			case "piri-piri":
				piriPiriRef.current.scrollIntoView({ behavior: "smooth" });
				break;
			case "dips":
				dipsRef.current.scrollIntoView({ behavior: "smooth" });
				break;
			default:
				break;
		}
	};

	return (
		<div className={classes.container}>
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
				<div id="desserts" ref={dessertsRef}>
					<MealsMenuCategory category="Desserts" />
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
			</span>
		</div>
	)
}

export default MealsMenu;