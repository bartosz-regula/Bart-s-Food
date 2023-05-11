import React, { useState, useEffect } from 'react';
import Modal from './Modal';
import Cart from '../MainSection/Cart/Cart';
import classes from '../ModalWindows/CartModal.module.css'

const CartModal = (props) => {
	const [windowWidth, setWindowWidth] = useState(window.innerWidth);

	useEffect(() => {
		const handleResize = () => setWindowWidth(window.innerWidth);
		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	}, []);

	return (
		<div>
			{windowWidth < 1200 ? (
				<Modal>
					<Cart onCloseCart={props.onCloseCart} onShowCheckout={props.onShowCheckout} />
				</Modal>
			) : null}
		</div>
	);
};

export default CartModal;