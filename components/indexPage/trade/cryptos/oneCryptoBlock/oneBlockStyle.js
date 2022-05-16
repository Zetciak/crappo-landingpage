// >> Modulesnb
import { makeStyles } from '@mui/styles';

// >> Styling
const useStyles = makeStyles({
	oneBlock: {
		width: '30%',
		minHeight: '433px',
		float: 'left',
		marginRight: '5%',
		background: '#FFFFFF',
		borderRadius: '16px',
		transition: 'background 1s',

		'& .cryptoTitle': {
			fontFamily: 'Rubik',
			fontStyle: 'normal',
			fontWeight: '700',
			fontSize: '32px',
			lineHeight: '150%',
			color: '#0D0D2B',
			textAlign: 'center',
			transition: 'color .7s',
			marginTop: '25px',
			position: 'relative',
		},

		'& .cryptoTitleSmall': {
			fontFamily: 'Rubik',
			fontStyle: 'normal',
			fontWeight: '500',
			fontSize: '18px',
			lineHeight: '150%',
			color: '#BDBDBD',
			marginLeft: '8px',
		},

		'& .cryptoDesc': {
			fontFamily: 'Rubik',
			fontStyle: 'normal',
			fontWeight: '400',
			fontSize: '16px',
			lineHeight: '28px',
			letterSpacing: '0.01em',
			color: '#828282',
			transition: 'color .7s',
			clear: 'both',
			width: '90%',
			margin: '0 auto',
			marginTop: '16px',
			textAlign: 'center',
		},

		'& .insideButton': {
			width: '64px',
			height: '64px',
			position: 'absolute',
			left: '0',
			right: '0',
			marginLeft: 'auto',
			marginRight: 'auto',
			margin: '0 auto',
			background: 'transparent',
			boxShadow: '0px 0px 0px 0px rgba(0, 0, 0, 0.0)',
			borderRadius: '32px',
			border: '2px solid rgba(43, 7, 110, 0.2)',
			transition: 'all .7s',

			'& .insideButtonArrow': {
				width: '20px',
				height: 'auto',
				color: '#3671E9',
				marginTop: '0px',
				marginLeft: '3px',
				transition: 'all .7s',
				background: 'transparent',
				borderRadius: '100%',
			},

			'& .insideButtonText': {
				fontFamily: 'Rubik',
				fontStyle: 'normal',
				fontWeight: '500',
				fontSize: '18px',
				display: 'none',
				opacity: '0',
				lineHeight: '150%',
				color: '#FFFFFF',
				transition: 'all .7s',
			},
		},

		'&:nth-child(3)': {
			marginRight: '0%',
		},

		'&:hover': {
			background: '#2B076e',

			'& .cryptoTitle': {
				color: '#ffffff',
			},

			'& .cryptoDesc': {
				color: '#FFFFFF',
			},

			'& .insideButton': {
				width: '225px',
				padding: '16px 16px 16px 24px',
				background: '#3671E9',
				boxShadow: '0px 0px 0px 0px rgba(0, 0, 0, 0.0)',
				border: '2px solid rgba(43, 7, 110, 0.0)',

				'& .insideButtonArrow': {
					background: '#ffffff',
					padding: '8px',
					width: '32px',
					height: '32px',
					marginLeft: '15px',
				},

				'& .insideButtonText': {
					display: 'block',
					opacity: '1',
				},
			},
		},
	},

	cryptoLogoDiv: {
		width: '80px',
		height: '80px',
		margin: '0 auto',
		marginTop: '48px',
	},

	outSideButton: {
		marginTop: '35px',
		width: '100%',
		height: '64px',
		position: 'relative',
	},
});

export default useStyles;
