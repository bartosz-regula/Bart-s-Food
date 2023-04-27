import { useReducer } from 'react';
import CartContext from './cart-context';

const defaultCartState = {
	items: [],
	totalAmount: 0
}

const cartReducer = (state, action) => {
	if (action.type === 'ADD') {
		const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount; //Cena za wszystkie sztuki tej tego samegoe meal
		console.log(updatedTotalAmount);

		const exisitingCartItemIndex = state.items.findIndex((item) => item.id === action.item.id); // Sprawdza czy jest juz tak item jaki dodajemy -1/0
		console.log(exisitingCartItemIndex);

		const exisitingCartItem = state.items[exisitingCartItemIndex]; // Pokazuje który item już się tam znajduje, jeżeli taki jest
		console.log(exisitingCartItem);
		let updatedItems;

		// Jeżeli to jest true to:
		//Wszystko pozsotaje to samo: id, name...Zmienia się tylko amount oraz price:
		if (exisitingCartItem) {
			const updatedItem = {
				...exisitingCartItem,
				amount: exisitingCartItem.amount + action.item.amount,
				price: exisitingCartItem.price + action.item.price
			};
			console.log(updatedItem);

			// Wszystkie items dodane do koszyka bez względu na ilość
			updatedItems = [...state.items];
			console.log(updatedItems);

			//Element o tym indexie [exisitingCartItemIndex] nadpisujemy tym: updatedItem
			updatedItems[exisitingCartItemIndex] = updatedItem;
			console.log(updatedItems[exisitingCartItemIndex]);
		} else {
			updatedItems = state.items.concat(action.item);
		}



		return {
			items: updatedItems,
			totalAmount: updatedTotalAmount
		};
	}

	if (action.type === "REMOVE") {

		const exisitingCartItemIndex = state.items.findIndex((item) => item.id === action.id);

		const exisitingItem = state.items[exisitingCartItemIndex];
		const updatedTotalAmount = state.totalAmount - (exisitingItem.price / exisitingItem.amount);
		let updatedItems;
		console.log('Exisiting item', exisitingItem);

		if (exisitingItem.amount === 1) {
			updatedItems = state.items.filter(item => item.id !== action.id)
		} else {
			const updatedItem = { ...exisitingItem, amount: exisitingItem.amount - 1, price: exisitingItem.price - (exisitingItem.price / exisitingItem.amount) };
			updatedItems = [...state.items]
			updatedItems[exisitingCartItemIndex] = updatedItem;

		}
		return {
			items: updatedItems,
			totalAmount: updatedTotalAmount
		}

	};

	if (action.type === "CLEAR") {

		return defaultCartState;


	}


	return defaultCartState;
};


const CartProvider = (props) => {
	const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState);

	const addItemToCartHandler = item => {
		dispatchCartAction({ type: 'ADD', item: item })
	}

	const removeItemFromCartHandler = id => {
		dispatchCartAction({ type: 'REMOVE', id: id })
	}

	const clearItemsFromCartHandler = () => {
		dispatchCartAction({ type: 'CLEAR' })
	}



	const cartContext = {
		items: cartState.items,
		totalAmount: cartState.totalAmount,
		addItem: addItemToCartHandler,
		removeItem: removeItemFromCartHandler,
		clearCart: clearItemsFromCartHandler
	};

	return (
		<CartContext.Provider value={cartContext}>
			{props.children}
		</CartContext.Provider>
	);
};

export default CartProvider;


