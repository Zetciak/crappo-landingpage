// >> Modulesnb
import { makeStyles } from '@mui/styles';

// >> Styling
const useStyles = makeStyles({
	mainDiv: {
		width: '1202px',
		margin: '0 auto',
		paddingTop: '101px',
		position: 'relative',
	},

	topStripeDiv: {
		position: 'absolute',
		width: '120px',
		height: '1002.26px',
		left: '370px',
		top: '-600px',
		background:
			'linear-gradient(180.09deg, rgba(255, 255, 255, 0) 0.49%, rgba(255, 255, 255, 0.04) 39.06%, rgba(255, 255, 255, 0) 99.92%)',
		transform: 'rotate(-120deg)',
	},

	bgD: {
		position: 'absolute',
		width: '260px',
		height: '130px',
		transform: 'rotate(-30deg)',
		right: '-180px',
		top: '200px',
	},

	bgU: {
		position: 'absolute',
		width: '240px',
		height: '120px',
		right: '-200px',
		top: '740px',
	},

	topElements: {
		width: '100%',
	},

	topOneElement: {
		width: '30%',
		float: 'left',
		marginRight: '5%',

		'&:nth-child(3)': {
			marginRight: '0%',
		},
	},

	topElementIconDiv: {
		width: '80px',
		height: '80px',
		background: 'rgba(255, 255, 255, 0.1)',
		borderRadius: '100%',
		float: 'left',
	},

	topElementIcon: {
		width: '45px',
		height: 'auto',
		color: '#3671E9',
		marginLeft: '18px',
		marginTop: '15px',
	},

	topElementTitle: {
		fontFamily: 'Rubik',
		fontStyle: 'normal',
		fontWeight: '700',
		fontSize: '40px',
		lineHeight: '150%',
		color: '#FFFFFF',
		float: 'left',
		minWidth: '50%',
		marginTop: '-5px',
		marginLeft: '24px',
	},

	topElementDesc: {
		fontFamily: 'Rubik',
		fontStyle: 'normal',
		fontWeight: '400',
		fontSize: '16px',
		lineHeight: '28px',
		letterSpacing: '0.01em',
		color: '#E0E0E0',
		float: 'left',
		minWidth: '50%',
		marginLeft: '24px',
	},

	leftSection: {
		width: '650px',
		height: '473px',
		float: 'left',
		marginTop: '120px',
	},

	rightSection: {
		width: '480px',
		marginTop: '180px',
		float: 'right',
	},

	rightSectionTitle: {
		fontFamily: 'Rubik',
		fontStyle: 'normal',
		fontWeight: '700',
		fontSize: '40px',
		lineHeight: '150%',
		color: '#ffffff',
	},

	rightSectionDesc: {
		fontFamily: 'Rubik',
		fontStyle: 'normal',
		fontWeight: '400',
		fontSize: '16px',
		lineHeight: '28px',
		letterSpacing: '0.01em',
		color: '#E0E0E0',
		marginTop: '24px',
		maxWidth: '408px',
	},

	rightSectionButton: {
		marginTop: '32px',
		padding: '16px 24px',
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
});

export default useStyles;
