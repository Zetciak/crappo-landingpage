// >> Modules
import Image from 'next/image';
import { Button, Typography } from '@mui/material';

// >> Styles
import useStyles from './whyCrappoStyle.js';

// >> Images
import leftSectionImage from '../../../public/indexPage/whyCrappo/leftSectionImage.png';
import bgU from '../../../public/indexPage/whyCrappo/bgU.png';
import bgD from '../../../public/indexPage/whyCrappo/bgD.png';
import BarChartRoundedIcon from '@mui/icons-material/BarChartRounded';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import PublicIcon from '@mui/icons-material/Public';

//Script
function WhyCrappo() {
	// >> Style
	const styles = useStyles();

	// >> Render
	return (
		<div className={styles.mainDiv}>
			<div className={styles.topStripeDiv}></div>
			<div className={styles.bgD}>
				<Image
					src={bgD}
					alt=""
					layout="responsive"
					objectFit="contain"
					quality="100"
				/>
			</div>
			<div className={styles.bgU}>
				<Image
					src={bgU}
					alt=""
					layout="responsive"
					objectFit="contain"
					quality="100"
				/>
			</div>
			<div className={styles.topElements}>
				<div className={styles.topOneElement}>
					<div className={styles.topElementIconDiv}>
						<BarChartRoundedIcon
							className={styles.topElementIcon}
						/>
					</div>
					<Typography className={styles.topElementTitle}>
						$30B
					</Typography>
					<Typography className={styles.topElementDesc}>
						Digital Currency Exchanged
					</Typography>
				</div>
				<div className={styles.topOneElement}>
					<div className={styles.topElementIconDiv}>
						<PersonRoundedIcon className={styles.topElementIcon} />
					</div>
					<Typography className={styles.topElementTitle}>
						10M+
					</Typography>
					<Typography className={styles.topElementDesc}>
						Trusted Wallets Investor
					</Typography>
				</div>
				<div className={styles.topOneElement}>
					<div className={styles.topElementIconDiv}>
						<PublicIcon className={styles.topElementIcon} />
					</div>
					<Typography className={styles.topElementTitle}>
						195
					</Typography>
					<Typography className={styles.topElementDesc}>
						Countries Supported
					</Typography>
				</div>
			</div>
			<div className={styles.leftSection}>
				<Image
					src={leftSectionImage}
					alt=""
					layout="responsive"
					objectFit="contain"
					priority={true}
					quality="100"
				/>
			</div>
			<div className={styles.rightSection}>
				<Typography className={styles.rightSectionTitle}>
					Why you should choose CRAPPO
				</Typography>
				<Typography className={styles.rightSectionDesc}>
					Experience the next generation cryptocurrency platform. No
					financial borders, extra fees, and fake reviews.
				</Typography>
				<Button
					variant="contained"
					className={styles.rightSectionButton}
				>
					<Typography>Learn More</Typography>
				</Button>
			</div>
		</div>
	);
}

export default WhyCrappo;
