// >> Modulesnb
import { makeStyles } from '@mui/styles';

// >> Styling
const useStyles = makeStyles({
	mainDiv: {
		width: '1200px',
		margin: '0 auto',
		position: 'relative',
		paddingTop: '72px',
	},

	insideDiv: {
		width: '100%',
		minHeight: '216px',
		background: '#3671E9',
		borderRadius: '16px',
		position: 'relative',
	},

	ethLogo: {
		position: 'absolute',
		width: '160px',
		height: '216px',
		left: '26px',
		top: '0px',
	},

	btcLogo: {
		position: 'absolute',
		width: '140px',
		height: '135px',
		right: '15px',
		bottom: '0px',
	},

	bottomStripe1: {
		background:
			'linear-gradient(180deg, rgba(255, 255, 255, 0) 40.77%, rgba(255, 255, 255, 0.3) 186.22%)',
		transform: 'rotate(-45deg)',
		width: '200px',
		height: '1000px',
		position: 'absolute',
		top: '-150px',
		left: '200px',
	},

	bottomStripe2: {
		background:
			'linear-gradient(180deg, rgba(255, 255, 255, 0) 40.77%, rgba(255, 255, 255, 0.3) 186.22%)',
		transform: 'rotate(-45deg)',
		width: '200px',
		height: '1000px',
		position: 'absolute',
		top: '-150px',
		left: '600px',
	},

	leftSection: {
		float: 'left',
		marginLeft: '48px',
		marginTop: '48px',
		maxWidth: '348px',
	},

	leftSectionTitle: {
		fontFamily: 'Rubik',
		fontStyle: 'normal',
		fontWeight: '700',
		fontSize: '32px',
		lineHeight: '150%',
		color: '#FFFFFF',
	},

	leftSectionDesc: {
		fontFamily: 'Rubik',
		fontStyle: 'normal',
		fontWeight: '400',
		fontSize: '16px',
		lineHeight: '28px',
		letterSpacing: '0.01em',
		color: '#FFFFFF',
		marginTop: '16px',
	},

	rightSection: {
		float: 'right',
		marginTop: '80px',
		marginRight: '48px',
	},

	enterEmailField: {
		width: '374px',

		'& label': {
			fontFamily: 'Rubik',
			fontStyle: 'normal',
			fontWeight: '400',
			fontSize: '16px',
			lineHeight: '28px',
			letterSpacing: '0.01em',
			color: '#FFFFFF',
		},

		'& label.Mui-focused': {
			color: '#FFFFFF',
		},

		'& .MuiInput-underline:after': {
			borderBottomColor: '#ffffff',
		},

		'& .MuiInput-underline': {
			paddingBottom: '5px',
			borderBottomColor: '#ffffff',
		},
	},

	subscribeButton: {
		padding: '14px 32px',
		background: '#FFFFFF',
		boxShadow: '0px 0px 0px 0px rgba(0, 0, 0, 0.0)',
		borderRadius: '32px',
		transition: 'all .5s',
		marginLeft: '40px',

		'&:hover': {
			background: '#e8e8e8',
			boxShadow: '0px 0px 0px 0px rgba(0, 0, 0, 0.0)',
		},

		'& p': {
			fontFamily: 'Rubik',
			fontStyle: 'normal',
			fontWeight: '500',
			fontSize: '18px',
			lineHeight: '150%',
			textTransform: 'none',
			color: '#0D0D2B',
		},

		'& span': {
			color: '#0D0D2B',
		},
	},
});

export default useStyles;
