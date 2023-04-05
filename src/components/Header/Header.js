import React from 'react'
import classes from './Header.module.css';



const Header = () => {
	return (
		<>
			<header>
				<nav className={classes.nav}>
					<span className={classes.logo}>Logo</span>
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