// >> Modules
import { makeStyles } from '@mui/styles';

// >> Styling
const useStyles = makeStyles({
	headerSection: {
		background: '#0D0D2B',
		width: '100%',
		minHeight: '850px',
	},

	whyCrappo: {
		background: '#0D0D2B',
		width: '100%',
		minHeight: '865px',
	},

	trade: {
		background: '#0D0D2B',
		width: '100%',
		minHeight: '1490px',
		position: 'relative',
	},

	tradeInside: {
		position: 'absolute',
		background: '#F8F9FB',
		width: '100%',
		top: '457px',
		minHeight: '1033px',
	},

	features: {
		width: '100%',
		minHeight: '1874px',
		background: '#2B076E',
		zIndex: '5',
		position: 'relative',
	},

	startMining: {
		width: '100%',
		minHeight: '392px',
		background: 'linear-gradient(180deg, #2B076E 0%, #0D0D2B 100%)',
		zIndex: '4',
		position: 'relative',
	},

	footer: {
		width: '100%',
		minHeight: '552px',
		background: '#0D0D2B',
		zIndex: '5',
		position: 'relative',
	},
});

export default useStyles;
