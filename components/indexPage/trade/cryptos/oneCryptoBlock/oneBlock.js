// >> Modules
import Image from 'next/image';
import { Button, Typography } from '@mui/material';

// >> Styles
import useStyles from './oneBlockStyle.js';

// >> Images
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';

//Script
function OneBlock(props) {
	// >> Style
	const styles = useStyles();

	// >> Render
	return (
		<div className={styles.oneBlock}>
			<div className={styles.cryptoLogoDiv}>
				<Image
					src={props.cryptoLogo}
					alt=""
					layout="responsive"
					objectFit="contain"
					quality="100"
				/>
			</div>

			<Typography className="cryptoTitle">
				{props.cryptoName}
				<span className="cryptoTitleSmall">
					{props.cryptoShortName}
				</span>
			</Typography>

			<Typography className="cryptoDesc">{props.cryptoDesc}</Typography>
			<div className={styles.outSideButton}>
				<Button variant="contained" className="insideButton">
					<Typography className="insideButtonText">
						Start mining
					</Typography>
					<ArrowForwardIosRoundedIcon className="insideButtonArrow" />
				</Button>
			</div>
		</div>
	);
}

export default OneBlock;
