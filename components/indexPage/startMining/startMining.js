// >> Modules
import Image from 'next/image';
import { Button, TextField, Typography } from '@mui/material';

// >> Styles
import useStyles from './startMiningStyle.js';

// >> Images
import ethLogo from '../../../public/indexPage/startMining/ethLogo.png';
import btcLogo from '../../../public/indexPage/startMining/btcLogo.png';

//Script
function StartMining() {
	// >> Style
	const styles = useStyles();

	// >> Render
	return (
		<div className={styles.mainDiv}>
			<div className={styles.bottomStripe1}></div>
			<div className={styles.bottomStripe2}></div>
			<div className={styles.insideDiv}>
				<div className={styles.ethLogo}>
					<Image
						src={ethLogo}
						alt=""
						layout="responsive"
						objectFit="contain"
						quality="100"
					/>
				</div>
				<div className={styles.btcLogo}>
					<Image
						src={btcLogo}
						alt=""
						layout="responsive"
						objectFit="contain"
						quality="100"
					/>
				</div>
				<div className={styles.leftSection}>
					<Typography className={styles.leftSectionTitle}>
						Start mining now
					</Typography>
					<Typography className={styles.leftSectionDesc}>
						Join now with CRAPPO to get the latest news and start
						mining now
					</Typography>
				</div>
				<div className={styles.rightSection}>
					<TextField
						label="Enter your email"
						variant="standard"
						className={styles.enterEmailField}
						InputProps={{
							style: {
								color: 'white',
							},
						}}
					/>
					<Button
						variant="contained"
						className={styles.subscribeButton}
					>
						<Typography>Subscribe</Typography>
					</Button>
				</div>
			</div>
		</div>
	);
}

export default StartMining;
