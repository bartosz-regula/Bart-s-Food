import React from 'react'
import logo from '../../assets/images/bartsfood_logo.png';
import NavBar from './NavBar';
import classes from './Header.module.css';



const Header = () => {
	return (
		<header className={classes.header}>
			<img src={logo} alt="Logo" />
			<NavBar></NavBar>
		</header>

	)

}

export default Header