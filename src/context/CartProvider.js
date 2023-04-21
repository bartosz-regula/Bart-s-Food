import { useReducer } from 'react';
import CartContext from './cart-context';

const defaultCartState = {
	items: [],
	totalAmount: 0
}

const cartReducer = (state, action) => {
	if (action.type === 'ADD') {
		const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount;

		const exisitingCartItemIndex = state.items.findIndex((item) => item.id === action.item.id); // Sprawdza czy jest posiłek o takmi id już w koszyku.

		const exisitingCartItem = state.items[exisitingCartItemIndex]; //Wyrażenie state.items[exisitingCartItemIndex] pobiera element z tablicy state.items o indeksie exisitingCartItemIndex i przypisuje go do zmiennej exisitingCartItem.
		let updatedItems;

		if (exisitingCartItem) {
			const updatedItem = {
				...exisitingCartItem,
				amount: exisitingCartItem.amount + action.item.amount
			};

			updatedItems = [...state.items];
			updatedItems[exisitingCartItemIndex] = updatedItem;
		} else {
			updatedItems = state.items.concat(action.item);
		}


		return {
			items: updatedItems,
			totalAmount: updatedTotalAmount
		};
	}
	return defaultCartState
};

const CartProvider = (props) => {
	const [cartState, dispatchCartActio] = useReducer(cartReducer, defaultCartState);

	const addItemToCartHandler = item => {
		dispatchCartActio({ type: 'ADD', item: item })
	}

	const removeItemFromCartHandler = id => {
		dispatchCartActio({ type: 'REMOVE', id: id })

	}

	const cartContext = {
		items: cartState.items,
		totalAmount: cartState.totalAmount,
		addItem: addItemToCartHandler,
		removeItem: removeItemFromCartHandler
	};

	return (
		<CartContext.Provider value={cartContext}>
			{props.children}
		</CartContext.Provider>
	);
};

export default CartProvider;


