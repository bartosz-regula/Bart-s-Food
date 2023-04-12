import React from 'react'
// import classes from './OurApps.module.css'

const OurApps = (props) => {
	return (
		<a href={props.href}>
			<img src={props.src} alt={props.alt}></img>
		</a>
	)
}

export default OurApps