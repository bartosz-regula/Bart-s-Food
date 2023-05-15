import React from 'react';
import NavBar from './NavBar/NavBar';
import classes from './Header.module.css';
// import videoBg from '../../assets/video/pexels-darlene-alderson-7039149-640x360-25fps.mp4';
import videoBg from '../../assets/video/Mój film.mp4';
import companyLogo from '../../assets/images/bartsfood_logo_yellow_stars.png';


const Header = () => {
	return (
		<header className={classes.header_container}>
			<div className={classes.video_bg_container}>
				<video src={videoBg} autoPlay loop muted playsinline="true" disablePictureInPicture="true" className={classes.video_bg} />
				<div className={classes.video_overlay}></div>
				<div className={classes.logo_container}>
					<img src={companyLogo} alt="Logo" className={classes.logo} />
					<p className={classes.logo_text}>Delicious fast food just a click away!</p>
					<a href="#main" className={classes.order_btn}>Order now!</a>
				</div>
			</div>
			<NavBar />
		</header>
	);
};

export default Header;
