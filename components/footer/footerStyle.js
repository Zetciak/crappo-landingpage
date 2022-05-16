// >> Modulesnb
import { makeStyles } from '@mui/styles';

// >> Styling
const useStyles = makeStyles({
	mainDiv: {
		width: '1202px',
		minHeight: '390px',
		margin: '0 auto',
		paddingTop: '60px',
	},

	logoSection: {
		float: 'left',
		marginRight: '171px',
		width: '135px',
		marginTop: '20px',
		minHeight: '244px',
	},

	logoDiv: {
		width: '40px',
		height: '40px',
		float: 'left',
	},

	logoText: {
		fontFamily: 'Inter',
		fontStyle: 'normal',
		fontWeight: '600',
		fontSize: '18px',
		lineHeight: '22px',
		letterspacing: '0.04em',
		color: '#FFFFFF',
		marginLeft: '16px',
		marginTop: '10px',
		float: 'left',
	},

	quickLink: {
		float: 'left',
		width: '200px',
		marginRight: '35px',
		marginTop: '25px',
		minHeight: '244px',
	},

	centerSectionsTitle: {
		fontFamily: 'Rubik',
		fontStyle: 'normal',
		fontWeight: '500',
		fontSize: '20px',
		lineHeight: '150%',
		color: '#FFFFFF',
	},

	listElements: {
		marginTop: '24px',
		color: 'transparent',
		'& li': {
			fontFamily: 'Rubik',
			fontStyle: 'normal',
			fontWeight: '400',
			fontSize: '16px',
			lineHeight: '38px',
			marginLeft: '-40px',
			'& a': {
				color: '#F2F2F2',
				opacity: '1',
				transition: 'color .5s, opacity .5s',
				'&:hover': {
					color: '#dddddd',
					opacity: '0.6',
					cursor: 'pointer',
				},
			},
		},
	},

	resources: {
		float: 'left',
		width: '200px',
		marginRight: '104px',
		marginTop: '25px',
		minHeight: '244px',
	},

	payments: {
		float: 'right',
		width: '355px',
		marginTop: '40px',
		minHeight: '244px',
	},

	paymentsSection: {
		fontFamily: 'Rubik',
		fontStyle: 'normal',
		fontWeight: '500',
		fontSize: '32px',
		lineHeight: '150%',
		color: '#FFFFFF',
	},

	paymentsButtons: {
		marginTop: '40px',
	},

	paymentButton: {
		width: '96px',
		height: '64px',
		background: '#E0E0E011',
		boxShadow: '0px 0px 0px 0px rgba(0, 0, 0, 0.0)',
		borderRadius: '8px',
		transition: 'all .5s',
		marginRight: '24px',

		'&:hover': {
			background: '#E0E0E022',
			boxShadow: '0px 0px 0px 0px rgba(0, 0, 0, 0.0)',
		},

		'& span': {
			color: '#FFFFFF',
		},

		'&:nth-child(3)': {
			marginRight: '0',
		},
	},

	visaDiv: {
		width: '48px',
		height: '16px',
	},

	mastercardDiv: {
		width: '48px',
		height: '36px',
	},

	bitcoinDiv: {
		width: '40px',
		height: '40px',
	},

	bottomFooter: {
		paddingTop: '120px',
		clear: 'both',
	},

	leftBottom: {
		float: 'left',
		width: '391px',
	},

	rights: {
		fontFamily: 'Rubik',
		fontStyle: 'normal',
		fontWeight: '400',
		fontSize: '16px',
		lineHeight: '28px',
		letterSpacing: '0.01em',
		color: '#FFFFFF',
	},

	rightBottom: {
		float: 'right',
	},

	rightBottomOneLogo: {
		width: '24px',
		height: '24px',
		opacity: '1.0',
		transition: 'opacity .5s',
		float: 'left',
		marginRight: '32px',

		'&:hover': {
			opacity: '.6',
			cursor: 'pointer',
		},

		'&:nth-child(5)': {
			marginRight: '0',
		},
	},
});

export default useStyles;
