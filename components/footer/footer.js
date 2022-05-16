// >> Modules
import Image from 'next/image';
import { Button, Typography } from '@mui/material';

// >> Styles
import useStyles from './footerStyle.js';

// >> Images
import logo from '../../public/logo.svg';
import bitcoin from '../../public/footer/bitcoin.svg';
import facebook from '../../public/footer/facebook.svg';
import instagram from '../../public/footer/instagram.svg';
import linkedin from '../../public/footer/linkedin.svg';
import mastercard from '../../public/footer/mastercard.svg';
import twitter from '../../public/footer/twitter.svg';
import visa from '../../public/footer/visa.svg';
import youtube from '../../public/footer/youtube.svg';

//Script
function Footer() {
	// >> Style
	const styles = useStyles();

	// >> Render
	return (
		<div className={styles.mainDiv}>
			<div className={styles.logoSection}>
				<div className={styles.logoDiv}>
					<Image
						src={logo}
						alt=""
						layout="responsive"
						objectFit="contain"
						priority={true}
						quality="100"
					/>
				</div>
				<Typography className={styles.logoText}>CRAPPO</Typography>
			</div>
			<div className={styles.quickLink}>
				<Typography className={styles.centerSectionsTitle}>
					Quick Link
				</Typography>
				<ul className={styles.listElements}>
					<li>
						<a>Home</a>
					</li>
					<li>
						<a>Products</a>
					</li>
					<li>
						<a>About</a>
					</li>
					<li>
						<a>Features</a>
					</li>
					<li>
						<a>Contact</a>
					</li>
				</ul>
			</div>
			<div className={styles.resources}>
				<Typography className={styles.centerSectionsTitle}>
					Resources
				</Typography>
				<ul className={styles.listElements}>
					<li>
						<a>Download Whitepapper</a>
					</li>
					<li>
						<a>Smart Token</a>
					</li>
					<li>
						<a>Blockchain Explorer</a>
					</li>
					<li>
						<a>Crypto API</a>
					</li>
					<li>
						<a>Interest</a>
					</li>
				</ul>
			</div>
			<div className={styles.payments}>
				<Typography className={styles.paymentsSection}>
					We accept following payment systems
				</Typography>
				<div className={styles.paymentsButtons}>
					<Button
						variant="contained"
						className={styles.paymentButton}
					>
						<div className={styles.visaDiv}>
							<Image
								src={visa}
								alt=""
								layout="responsive"
								objectFit="contain"
								quality="100"
							/>
						</div>
					</Button>
					<Button
						variant="contained"
						className={styles.paymentButton}
					>
						<div className={styles.mastercardDiv}>
							<Image
								src={mastercard}
								alt=""
								layout="responsive"
								objectFit="contain"
								quality="100"
							/>
						</div>
					</Button>
					<Button
						variant="contained"
						className={styles.paymentButton}
					>
						<div className={styles.bitcoinDiv}>
							<Image
								src={bitcoin}
								alt=""
								layout="responsive"
								objectFit="contain"
								quality="100"
							/>
						</div>
					</Button>
				</div>
			</div>
			<div className={styles.bottomFooter}>
				<div className={styles.leftBottom}>
					<Typography className={styles.rights}>
						©2021 CRAPPO. All rights reserved
					</Typography>
				</div>
				<div className={styles.rightBottom}>
					<div className={styles.rightBottomOneLogo}>
						<Image
							src={facebook}
							alt=""
							layout="responsive"
							objectFit="contain"
							quality="100"
						/>
					</div>
					<div className={styles.rightBottomOneLogo}>
						<Image
							src={instagram}
							alt=""
							layout="responsive"
							objectFit="contain"
							quality="100"
						/>
					</div>
					<div className={styles.rightBottomOneLogo}>
						<Image
							src={youtube}
							alt=""
							layout="responsive"
							objectFit="contain"
							quality="100"
						/>
					</div>
					<div className={styles.rightBottomOneLogo}>
						<Image
							src={twitter}
							alt=""
							layout="responsive"
							objectFit="contain"
							quality="100"
						/>
					</div>
					<div className={styles.rightBottomOneLogo}>
						<Image
							src={linkedin}
							alt=""
							layout="responsive"
							objectFit="contain"
							quality="100"
						/>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Footer;
