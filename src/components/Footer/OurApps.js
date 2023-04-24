import React from 'react'
import classes from './OurApps.module.css'

const OurApps = (props) => {
	return (
		<a href={props.href} target="_blank" rel="noreferrer"
		>
			<img className={classes.our_apps_img} src={props.src} alt={props.alt}></img>
		</a>
	)
}

export default OurApps