// >> Modules
import Image from 'next/image';
import { Button, Typography } from '@mui/material';

// >> Styles
import useStyles from './featuresStyle.js';

// >> Images
import chart1 from '../../../public/indexPage/features/chart1.png';
import chart2 from '../../../public/indexPage/features/chart2.png';
import chart3 from '../../../public/indexPage/features/chart3.png';
import topCircle from '../../../public/indexPage/features/bgCircle.png';
import bottomCircle from '../../../public/indexPage/features/bgCircle2.png';

//Script
function Header() {
	// >> Style
	const styles = useStyles();

	// >> Render
	return (
		<div className={styles.mainDiv}>
			<div className={styles.topCircleBg}>
				<Image
					src={topCircle}
					alt=""
					layout="responsive"
					objectFit="contain"
					quality="100"
				/>
			</div>
			<div className={styles.bottomCircleBg}></div>
			<Typography className={styles.mainTitle}>
				Market sentiments, portfolio, and run the infrastructure of your
				choice
			</Typography>
			<div className={styles.firstSection}>
				<div className={styles.firstSectionLeft}>
					<Typography className={styles.sectionTitle}>
						Invest Smart
					</Typography>
					<Typography className={styles.sectionDesc}>
						Get full statistic information about the behaviour of
						buyers and sellers will help you to make the decision.
					</Typography>
					<Button
						variant="contained"
						className={styles.sectionButton}
					>
						<Typography>Learn More</Typography>
					</Button>
				</div>
				<div className={styles.firstSectionRight}>
					<Image
						src={chart1}
						alt=""
						layout="responsive"
						objectFit="contain"
						quality="100"
					/>
				</div>
			</div>
			<div className={styles.secondSection}>
				<div className={styles.secondSectionLeft}>
					<Image
						src={chart2}
						alt=""
						layout="responsive"
						objectFit="contain"
						quality="100"
					/>
				</div>
				<div className={styles.secondSectionRight}>
					<Typography className={styles.sectionTitle}>
						Detailed Statistics
					</Typography>
					<Typography className={styles.sectionDesc}>
						View all mining related information in realtime, at any
						point at any location and decide which polls you want to
						mine in.
					</Typography>
					<Button
						variant="contained"
						className={styles.sectionButton}
					>
						<Typography>Learn More</Typography>
					</Button>
				</div>
			</div>
			<div className={styles.thirdSection}>
				<div className={styles.thirdSectionLeft}>
					<Typography className={styles.sectionTitle}>
						Grow your profit and track your investments
					</Typography>
					<Typography className={styles.sectionDesc}>
						Use advanced analytical tools. Clear TradingView charts
						let you track current and historical profit investments.
					</Typography>
					<Button
						variant="contained"
						className={styles.sectionButton}
					>
						<Typography>Learn More</Typography>
					</Button>
				</div>
				<div className={styles.thirdSectionRight}>
					<Image
						src={chart3}
						alt=""
						layout="responsive"
						objectFit="contain"
						quality="100"
					/>
				</div>
			</div>
		</div>
	);
}

export default Header;
