import React from 'react';

const CartContext = React.createContext({
	/* Dane dodane tylko dla lepszego autouzupełniania poźniej */
	items: [],
	totalAmount: 0,
	addItem: (item) => { },
	removeItem: (id) => { },
	clearCart: () => { }
});

export default CartContext