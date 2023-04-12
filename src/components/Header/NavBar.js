import React from 'react'
import classes from './NavBar.module.css'
import NavItem from './NavItem';

const NavBar = () => {
	return (
		<nav >
			<ul className={classes.navigation_content}>
				<NavItem
					icon="logo-facebook"
					href='https://www.facebook.com' />
				<NavItem
					icon="logo-instagram"
					href='https://www.instagram.com' />
				<NavItem
					icon="logo-tiktok" href='https://www.tiktok.com' />
			</ul>
		</nav>

	)
}

export default NavBar;