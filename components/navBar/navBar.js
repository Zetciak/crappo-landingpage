// >> Modules
import Image from 'next/image';
import { Button, Typography } from '@mui/material';
import { Link } from 'react-scroll';

// >> Styles
import useStyles from './navStyle.js';

// >> Images
import logo from '../../public/logo.svg';

//Script
function NavBar() {
	// >> Style
	const styles = useStyles();

	// >> Render
	return (
		<div className={styles.mainDiv}>
			<div className={styles.leftSection}>
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
			<div className={styles.rightSection}>
				<div className={styles.rightLinks}>
					<ul>
						<li>
							<Link to="home">Products</Link>
						</li>
						<li>
							<Link to="menu">Features</Link>
						</li>
						<li>
							<Link to="contract">About</Link>
						</li>
						<li>
							<Link to="shop">Contact</Link>
						</li>
					</ul>
				</div>
				<div className={styles.rightLogin}>
					<Typography className={styles.loginButton}>
						Login
					</Typography>
					<div className={styles.rightLine}></div>
					<Button
						variant="contained"
						className={styles.registerButton}
					>
						<Typography>Register</Typography>
					</Button>
				</div>
			</div>
		</div>
	);
}

export default NavBar;
