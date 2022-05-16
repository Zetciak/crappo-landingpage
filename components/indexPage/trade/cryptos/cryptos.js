// >> Modules
import Image from 'next/image';
import { Button, Typography } from '@mui/material';

// >> Styles
import useStyles from './cryptosStyle.js';

// >> Images
import bitcoin from '../../../../public/indexPage/trade/bitcoin.svg';
import litecoin from '../../../../public/indexPage/trade/litecoin.svg';
import ethereum from '../../../../public/indexPage/trade/ethereum.svg';

// >> Components
import OneBlock from './oneCryptoBlock/oneBlock.js';

//Script
function WhyCrappo() {
	// >> Style
	const styles = useStyles();

	// >> Render
	return (
		<div className={styles.mainDiv}>
			<Typography className={styles.mainTitle}>
				Trade securely and market the high growth cryptocurrencies.
			</Typography>
			<div className={styles.blocksDiv}>
				<OneBlock
					cryptoLogo={bitcoin}
					cryptoName="Bitcoin"
					cryptoShortName="BTC"
					cryptoDesc="Digital currency in which a record of transactions is maintained."
				/>
				<OneBlock
					cryptoLogo={ethereum}
					cryptoName="Ethereum"
					cryptoShortName="ETH"
					cryptoDesc="Blockchain technology to create and run decentralized digital applications."
				/>
				<OneBlock
					cryptoLogo={litecoin}
					cryptoName="Litecoin"
					cryptoShortName="LTC"
					cryptoDesc="Cryptocurrency that enables instant payments to anyone in the world."
				/>
			</div>
		</div>
	);
}

export default WhyCrappo;
