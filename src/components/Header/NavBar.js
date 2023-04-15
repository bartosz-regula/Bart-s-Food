import React from 'react'
import classes from './NavBar.module.css'
import NavBarButton from './NavBarButton';

const NavBar = () => {
	return (
		<nav >
			<ul className={classes.navigation_content}>
				<NavBarButton
					icon="logo-facebook"
					href='https://www.facebook.com' />
				<NavBarButton
					icon="logo-instagram"
					href='https://www.instagram.com' />
				<NavBarButton
					icon="logo-tiktok" href='https://www.tiktok.com' />
			</ul>
		</nav>

	)
}

export default NavBar;