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
						<li><a
							className={classes.nav__link}
							href='https://www.facebook.com'
							target="_blank"
							rel="noreferrer">Facebook</a>
						</li>
						<li><a
							className={classes.nav__link}
							href='https://www.instagram.com'
							target="_blank"
							rel="noreferrer">Instagram</a>
						</li>
						<li><a
							className={classes.nav__link}
							href='https://www.whatsapp.com'
							target="_blank"
							rel="noreferrer">What's up</a>
						</li>
					</ul>
				</nav>
			</header>
		</>
	)

}

export default Header