import React from 'react'
import classes from './Footer.module.css'
import google_play from '../../assets/images/google-play.png';
import app_store from '../../assets/images/app-store.png';
import app_gallery from '../../assets/images/huawei.png';
import paymentOperators from '../../assets/images/paymentsOperators.png'
import OurApps from './OurApps';


const Footer = () => {
	return (
		<footer>
			<div className={classes.container_main}>
				<div>
					<p>Download our apps</p>
					<div className={classes.store_img_container}>
						<OurApps
							href='https://www.apple.com/pl/app-store'
							src={app_store}
							alt='App Store logo' />
						<OurApps
							href='https://play.google.com/store'
							src={google_play}
							alt='Google Play logo' />
						<OurApps
							href='https://appgallery.huawei.com/Featured'
							src={app_gallery}
							alt='App Gallery logo' />
					</div>
				</div>

				<div className={classes.contact_container}>
					<div>Contact us</div>
					<div className={classes.contact_details}>
						<p>
							<span className={classes.contact_details_icon}><ion-icon name="call"></ion-icon></span> 7424441519
						</p>
						<p>
							<span className={classes.contact_details_icon}><ion-icon name="mail"></ion-icon></span> bartsfood@gmail.com
						</p>
						<p>
							<span className={classes.contact_details_icon}><ion-icon name="home"></ion-icon></span> 9748 Abingdon St, London SW1P 3JY
						</p>
					</div>
				</div>

				<div>
					<img className={classes.payment_img} src={paymentOperators} alt='Payment operators'></img>
				</div>
			</div>
			<div className={classes.copyright}>Copyright © 2023 by Bart's Food, Inc. All rights reserved.</div>


		</footer>

	)
}

export default Footer