import React from 'react';
import NavBar from './NavBar';
import classes from './Header.module.css';
import videoBg from '../../assets/video/pexels-darlene-alderson-7039149-640x360-25fps.mp4';
import logo from '../../assets/images/bartsfood_logo.png';

const Header = () => {
	return (
		<header className={classes.header}>
			<div className={classes.videoBgContainer}>
				<video src={videoBg} autoPlay loop muted className={classes.videoBg} />
				<div className={classes.videoOverlay}></div>
				<div className={classes.logoContainer}>
					<img src={logo} alt="Logo" className={classes.logo} />
					<div className={classes.logoText}>Delicious fast food just a click away!</div>
					<button className={classes.orderButton}>Order now!</button>
				</div>
			</div>
			<NavBar />
		</header>
	);
};

export default Header;
