// >> Modulesnb
import { makeStyles } from '@mui/styles';

// >> Styling
const useStyles = makeStyles({
	mainDiv: {
		width: '1202px',
		margin: '0 auto',
		marginTop: '101px',
		position: 'relative',
	},

	leftSection: {
		width: '588px',
		float: 'left',
		marginTop: '101px',
	},

	blackFriday: {
		width: '370px',
		height: '40px',
		background: 'rgba(255, 255, 255, 0.1)',
		borderRadius: '32px',
	},

	save75: {
		width: '113px',
		height: '32px',
		background: '#FFFFFF',
		borderRadius: '32px',
		marginTop: '4px',
		marginLeft: '4px',
		float: 'left',
	},

	save75Title: {
		fontFamily: 'Rubik',
		fontStyle: 'normal',
		fontWeight: '500',
		fontSize: '16px',
		lineHeight: '150%',
		letterSpacing: '0.04em',
		color: '#0D0D2B',
		width: '100%',
		textAlign: 'center',
		marginTop: '4px',
	},

	save75Desc: {
		float: 'left',
		fontFamily: 'Rubik',
		fontStyle: 'normal',
		fontWeight: '400',
		fontSize: '16px',
		lineHeight: '28px',
		letterSpacing: '0.01em',
		color: '#FFFFFF',
		marginTop: '6px',
		marginLeft: '16px',
	},

	leftSectionTitle: {
		fontFamily: 'Rubik',
		fontStyle: 'normal',
		fontWeight: '700',
		fontSize: '64px',
		lineHeight: '76px',
		color: '#FFFFFF',
		marginTop: '24px',
	},

	leftSectionDesc: {
		fontFamily: 'Rubik',
		fontStyle: 'normal',
		fontWeight: '400',
		fontSize: '16px',
		lineHeight: '28px',
		letterSpacing: '0.01em',
		color: '#E0E0E0',
		maxWidth: '435px',
		marginTop: '14px',
	},

	tryButton: {
		marginTop: '32px',
		padding: '16px 16px 16px 24px',
		background: '#3671E9',
		boxShadow: '0px 0px 0px 0px rgba(0, 0, 0, 0.0)',
		borderRadius: '32px',
		transition: 'all .5s',

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

	buttonArrowDiv: {
		background: '#ffffff',
		borderRadius: '100%',
		width: '32px',
		height: '32px',
		marginLeft: '20px',
	},

	buttonArrow: {
		width: '14px',
		height: 'auto',
		color: '#3671E9',
		marginTop: '9px',
		marginLeft: '2px',
	},

	rightSection: {
		width: '604px',
		height: '585px',
		float: 'right',
	},

	stripeDiv: {
		position: 'absolute',
		width: '120px',
		height: '997.88px',
		right: '0px',
		top: '0px',
		background:
			'linear-gradient(180.09deg, rgba(255, 255, 255, 0) 0.49%, rgba(255, 255, 255, 0.04) 39.06%, rgba(255, 255, 255, 0) 99.92%)',
		transform: 'rotate(-120deg)',
	},
});

export default useStyles;
