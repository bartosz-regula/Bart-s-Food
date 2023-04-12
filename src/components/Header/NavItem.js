import React from 'react'
import classes from './NavItem.module.css'

const NavItem = (props) => {
	return (
		<li>
			<a
				className={classes.nav_item}
				href={props.href}
				target="_blank"
				rel="noreferrer">
				<ion-icon name={props.icon}></ion-icon>
			</a>
		</li>

	)
}

export default NavItem;