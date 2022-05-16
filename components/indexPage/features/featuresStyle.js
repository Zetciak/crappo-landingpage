// >> Modulesnb
import { makeStyles } from '@mui/styles';

// >> Styling
const useStyles = makeStyles({
	mainDiv: {
		width: '1255px',
		margin: '0 auto',
		paddingTop: '101px',
		position: 'relative',
	},

	mainTitle: {
		fontFamily: 'Rubik',
		fontStyle: 'normal',
		fontWeight: '700',
		fontSize: '40px',
		lineHeight: '150%',
		color: '#FFFFFF',
		width: '780px',
		margin: '0 auto',
		textAlign: 'center',
	},

	firstSection: {
		width: '1134px',
		margin: '0 auto',
		marginTop: '100px',
		clear: 'both',
	},

	firstSectionLeft: {
		float: 'left',
		width: '454px',
		marginTop: '50px',
	},

	firstSectionRight: {
		float: 'right',
		width: '580px',
		height: '427px',
	},

	secondSection: {
		width: '1255px',
		margin: '0 auto',
		paddingTop: '120px',
		clear: 'both',
	},

	secondSectionLeft: {
		float: 'left',
		width: '710px',
		height: '453px',
	},

	secondSectionRight: {
		float: 'right',
		width: '454px',
		marginTop: '100px',
	},

	thirdSection: {
		width: '1200px',
		margin: '0 auto',
		paddingTop: '120px',
		clear: 'both',
	},

	thirdSectionLeft: {
		float: 'left',
		width: '454px',
		marginTop: '10px',
	},

	thirdSectionRight: {
		float: 'right',
		width: '682px',
		height: '334px',
	},

	sectionTitle: {
		fontFamily: 'Rubik',
		fontStyle: 'normal',
		fontWeight: '700',
		fontSize: '32px',
		lineHeight: '150%',
		color: '#FFFFFF',
	},

	sectionDesc: {
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

	sectionButton: {
		padding: '16px 32px',
		background: '#3671E9',
		boxShadow: '0px 0px 0px 0px rgba(0, 0, 0, 0.0)',
		borderRadius: '32px',
		transition: 'all .5s',
		marginTop: '32px',

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

	topCircleBg: {
		position: 'absolute',
		width: '686px',
		height: '229px',
		top: '0',
		left: '50px',
	},

	bottomCircleBg: {
		position: 'absolute',
		width: '686px',
		height: '686px',
		bottom: '-730px',
		right: '-480px',
		background: 'rgba(255, 255, 255, 0.03)',
		borderRadius: '100%',
	},
});

export default useStyles;
