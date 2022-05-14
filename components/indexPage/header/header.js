// >> Modules
import Image from 'next/image';
import { Button, Typography } from '@mui/material';

// >> Styles
import useStyles from './headerStyle.js';

// >> Images
import rightSectionImage from '../../../public/indexPage/header/rightSectionImage.png';
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';

//Script
function Header() {
	// >> Style
	const styles = useStyles();

	// >> Render
	return (
		<div className={styles.mainDiv}>
			<div className={styles.leftSection}>
				<div className={styles.blackFriday}>
					<div className={styles.save75}>
						<Typography className={styles.save75Title}>
							75% SAVE
						</Typography>
					</div>
					<Typography className={styles.save75Desc}>
						For the Black Friday weekend
					</Typography>
				</div>
				<Typography className={styles.leftSectionTitle}>
					Fastest & secure platform to invest in crypto
				</Typography>
				<Typography className={styles.leftSectionDesc}>
					Buy and sell cryptocurrencies, trusted by 10M wallets with
					over $30 billion in transactions.
				</Typography>
				<Button variant="contained" className={styles.tryButton}>
					<Typography>Try for FREE</Typography>
					<div className={styles.buttonArrowDiv}>
						<ArrowForwardIosRoundedIcon
							className={styles.buttonArrow}
						/>
					</div>
				</Button>
			</div>
			<div className={styles.rightSection}>
				<Image
					src={rightSectionImage}
					alt=""
					layout="responsive"
					objectFit="contain"
					priority={true}
					quality="100"
				/>
			</div>
			<div className={styles.stripeDiv}></div>
		</div>
	);
}

export default Header;
