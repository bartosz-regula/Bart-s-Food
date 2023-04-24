import React from 'react'
import classes from './NavBarBtn.module.css'

const NavBarBtn = (props) => {
	return (
		<li>
			<a
				className={classes.nav_btn}
				href={props.href}
				target="_blank"
				rel="noreferrer">
				<ion-icon name={props.icon}></ion-icon>
			</a>
		</li>

	)
}

export default NavBarBtn;