// >> Modulesnb
import { makeStyles } from '@mui/styles';

// >> Styling
const useStyles = makeStyles({
	mainDiv: {
		width: '942px',
		margin: '0 auto',
		paddingTop: '100px',
		position: 'relative',
	},

	topStripeDiv: {
		position: 'absolute',
		width: '120px',
		height: '997.88px',
		left: '-550px',
		top: '-500px',
		background:
			'linear-gradient(180.09deg, rgba(255, 255, 255, 0) 0.49%, rgba(255, 255, 255, 0.04) 39.06%, rgba(255, 255, 255, 0) 99.92%)',
		transform: 'rotate(60deg)',
	},

	calcTitle: {
		fontFamily: 'Rubik',
		fontStyle: 'normal',
		fontWeight: '700',
		fontSize: '40px',
		lineHeight: '150%',
		color: '#FFFFFF',
		width: '741px',
		margin: '0 auto',
		textAlign: 'center',
	},

	calcDesc: {
		fontFamily: 'Rubik',
		fontStyle: 'normal',
		fontWeight: '400',
		fontSize: '18px',
		lineHeight: '150%',
		color: '#E0E0E0',
		width: '622px',
		margin: '0 auto',
		textAlign: 'center',
	},

	calculatorDiv: {
		width: '100%',
		height: '371px',
		filter: 'drop-shadow(0px 20px 200px rgba(57, 23, 119, 0.05))',
		borderRadius: '15px',
		background: '#ffffff',
		marginTop: '64px',
	},

	topCalculator: {
		width: '846px',
		margin: '0 auto',
		paddingTop: '48px',
	},

	hashrateInput: {
		width: '403px',
		marginRight: '48px',

		'& label': {
			fontFamily: 'Rubik',
			fontStyle: 'normal',
			fontWeight: '400',
			fontSize: '20px',
			lineHeight: '150%',
			color: '#0D0D2B',
		},

		'& label.Mui-focused': {
			color: '#0D0D2B',
		},

		'& .MuiInput-underline:after': {
			borderBottomColor: '#3671E9',
		},

		'& .MuiInput-underline': {
			paddingBottom: '5px',
			borderBottomColor: '#E0E0E0',
		},
	},

	hashrateTypeInputLabel: {
		fontFamily: 'Rubik',
		fontStyle: 'normal',
		fontWeight: '400',
		fontSize: '20px',
		lineHeight: '150%',
		color: '#0D0D2B',
	},

	hashrateTypeInput: {
		width: '200px',

		'& .MuiInput-underline:after': {
			borderBottomColor: '#3671E9',
		},

		'& .MuiInput-underline': {
			paddingBottom: '5px',
			borderBottomColor: '#E0E0E0',
		},
	},

	calculateButton: {
		padding: '16px 32px',
		background: '#3671E9',
		boxShadow: '0px 0px 0px 0px rgba(0, 0, 0, 0.0)',
		borderRadius: '32px',
		transition: 'all .5s',
		marginLeft: '47px',

		'&:hover': {
			background: '#216aff',
			boxShadow: '0px 0px 0px 0px rgba(0, 0, 0, 0.0)',
		},

		'& p': {
			fontFamily: 'Rubik',
			fontStyle: 'normal',
			fontWeight: '500',
			fontSize: '18px',
			lineHeight: '150%',
			textTransform: 'none',
			color: '#FFFFFF',
		},

		'& span': {
			color: '#FFFFFF',
		},
	},

	bottomCalculator: {
		marginTop: '120px',
		marginLeft: '48px',
	},

	revenue: {
		fontFamily: 'Rubik',
		fontStyle: 'normal',
		fontWeight: '500',
		fontSize: '16px',
		letterSpacing: '0.04em',
		lineHeight: '150%',
		color: '#3671E9',
	},

	calculatedEth: {
		fontFamily: 'Rubik',
		fontStyle: 'normal',
		fontWeight: '700',
		fontSize: '32px',
		letterSpacing: '0.04em',
		lineHeight: '150%',
		color: '#0D0D2B',
		marginTop: '4px',
	},

	blueText: {
		color: '#3671E9',
	},

	revenueDesc: {
		fontFamily: 'Rubik',
		fontStyle: 'normal',
		fontWeight: '400',
		fontSize: '16px',
		letterSpacing: '0.01em',
		lineHeight: '28px',
		color: '#828282',
		marginTop: '1px',
	},
});

export default useStyles;
