// >> Modules
import Head from 'next/head';

// >> Styles
import useStyles from '../components/indexPage/indexStyle.js';

// >> Components
import NavBar from '../components/navBar/navBar.js';
import Header from '../components/indexPage/header/header.js';
import WhyCrappo from '../components/indexPage/whyCrappo/whyCrappo.js';
import Calculator from '../components/indexPage/trade/calculator/calculator.js';

export default function Home() {
	// >> Style
	const styles = useStyles();

	// >> Render
	return (
		<div className={styles.container}>
			<Head>
				<title>Crappo - Landing page</title>
				<meta charSet="utf-8" />
				<meta
					name="description"
					content="Web: Marcel 'Zetty' Mikosza, UI/UX: Hem Charan"
				/>
			</Head>
			<div className={styles.headerSection}>
				<NavBar />
				<Header />
			</div>
			<div className={styles.whyCrappo}>
				<WhyCrappo />
			</div>
			<div className={styles.trade}>
				<div className={styles.tradeInside}></div>
				<Calculator />
			</div>
		</div>
	);
}
