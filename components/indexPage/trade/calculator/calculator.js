// >> Modules
import {
	Button,
	FormControl,
	InputLabel,
	MenuItem,
	TextField,
	Typography,
} from '@mui/material';
import { useState } from 'react';
import Select from '@mui/material/Select';

// >> Styles
import useStyles from './calculatorStyle.js';

// >> Variables
let ethereumPrice = 2132.31;

//Script
function Calculator() {
	// >> Style
	const styles = useStyles();

	// >> States
	const [hash, setHash] = useState('');
	const [hashRate, setHashRate] = useState(0);
	const [moneyPerDay, setMoneyPerDay] = useState(0);

	const handleChange = (event) => {
		setHash(event.target.value);
	};

	const calculateButtonClick = () => {
		if (hash === 'mhs') {
			setHashRate(
				Number(document.getElementById('inputHash').value) * 0.00001207
			);
			setMoneyPerDay(
				Number(document.getElementById('inputHash').value) *
					0.00001207 *
					ethereumPrice
			);
		} else if (hash === 'ghs') {
			setHashRate(
				Number(document.getElementById('inputHash').value) * 0.01207
			);
			setMoneyPerDay(
				Number(document.getElementById('inputHash').value) *
					0.01207 *
					ethereumPrice
			);
		} else if (hash === 'ths') {
			setHashRate(
				Number(document.getElementById('inputHash').value) * 12.06
			);
			setMoneyPerDay(
				Number(document.getElementById('inputHash').value) *
					12.06 *
					ethereumPrice
			);
		} else if (hash === '') {
			setHashRate(0);
			setMoneyPerDay(0);
		}
	};

	// >> Render
	return (
		<div className={styles.mainDiv}>
			<div className={styles.topStripeDiv}></div>
			<Typography className={styles.calcTitle}>
				Check how much you can earn
			</Typography>
			<Typography className={styles.calcDesc}>
				Let’s check your hash rate to see how much you will earn today,
				Exercitation veniam consequat sunt nostrud amet.
			</Typography>
			<div className={styles.calculatorDiv}>
				<div className={styles.topCalculator}>
					<TextField
						type="number"
						label="Enter your hash rate"
						variant="standard"
						id="inputHash"
						className={styles.hashrateInput}
					/>
					<FormControl
						variant="standard"
						className={styles.hashrateTypeInput}
					>
						<InputLabel className={styles.hashrateTypeInputLabel}>
							Hash
						</InputLabel>
						<Select
							value={hash}
							onChange={handleChange}
							className={styles.hashrateTypeInput}
						>
							<MenuItem value={''}>None</MenuItem>
							<MenuItem value={'mhs'}>MH/s</MenuItem>
							<MenuItem value={'ghs'}>GH/s</MenuItem>
							<MenuItem value={'ths'}>TH/s</MenuItem>
						</Select>
					</FormControl>
					<Button
						variant="contained"
						className={styles.calculateButton}
						onClick={() => calculateButtonClick()}
					>
						<Typography>Calculate</Typography>
					</Button>
				</div>
				<div className={styles.bottomCalculator}>
					<Typography className={styles.revenue}>
						ESTIMATED 24 HOUR REVENUE:
					</Typography>
					<Typography className={styles.calculatedEth}>
						{hashRate.toFixed(3)} ETH{' '}
						<span className={styles.blueText}>
							(${moneyPerDay.toFixed(2)})
						</span>
					</Typography>
					<Typography className={styles.revenueDesc}>
						Revenue will change based on mining difficulty and
						Ethereum price.
					</Typography>
				</div>
			</div>
		</div>
	);
}

export default Calculator;
