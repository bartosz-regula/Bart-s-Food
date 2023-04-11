import React from 'react'
import logo from '../../assets/images/bartsfood_logo.png';
import classes from './Header.module.css';



const Header = () => {
	return (
		<>
			<header>
				<img src={logo} alt="Logo" />
				<nav className={classes.nav}>
					<ul>
						<li>
							<a
								className={classes.nav__link}
								href='https://www.facebook.com'
								target="_blank"
								rel="noreferrer">
								<ion-icon name="logo-facebook"></ion-icon></a>
						</li>
						<li>
							<a
								className={classes.nav__link}
								href='https://www.instagram.com'
								target="_blank"
								rel="noreferrer">
								<ion-icon name="logo-instagram"></ion-icon>
							</a>
						</li>
						<li>
							<a
								className={classes.nav__link}
								href='https://www.tiktok.com'
								target="_blank"
								rel="noreferrer">
								<ion-icon name="logo-tiktok"></ion-icon>
							</a>
						</li>
					</ul>
				</nav>
			</header>
		</>
	)

}

export default Header