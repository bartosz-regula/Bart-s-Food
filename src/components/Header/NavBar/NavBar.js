import React from 'react'
import classes from './NavBar.module.css'
import NavBarBtn from './NavBarBtn';

const NavBar = () => {
	return (
		<nav className={classes.nav_container}>
			<ul className={classes.nav_items}>
				<NavBarBtn
					icon="logo-facebook"
					href='https://www.facebook.com' />

				<NavBarBtn
					icon="logo-instagram"
					href='https://www.instagram.com' />

				<NavBarBtn
					icon="logo-tiktok" href='https://www.tiktok.com' />

			</ul>
		</nav>

	)
}

export default NavBar;