// >> Modulesnb
import { makeStyles } from '@mui/styles';

// >> Styling
const useStyles = makeStyles({
	mainDiv: {
		width: '1202px',
		minHeight: '52px',
		margin: '0 auto',
		paddingTop: '60px',
	},

	leftSection: {
		float: 'left',
	},

	logoDiv: {
		width: '40px',
		height: '40px',
		float: 'left',
	},

	logoText: {
		marginLeft: '16px',
		fontFamily: 'Inter',
		fontStyle: 'normal',
		fontWeight: '600',
		fontSize: '18px',
		lineHeight: '22px',
		letterSpacing: '0.04em',
		color: '#FFFFFF',
		float: 'left',
		marginTop: '10px',
	},

	rightSection: {
		float: 'right',
	},

	rightLinks: {
		float: 'left',
		marginTop: '-5px',
		marginRight: '56px',
		'& ul': {
			color: 'transparent',
			'& li': {
				fontFamily: 'Rubik',
				fontStyle: 'normal',
				fontWeight: '400',
				fontSize: '16px',
				lineHeight: '28px',
				letterSpacing: '0.01em',
				float: 'left',
				marginLeft: '32px',
				'& a': {
					color: '#FFFFFF',
					opacity: '1',
					transition: 'color .5s, opacity .5s',
					'&:hover': {
						color: '#dddddd',
						opacity: '0.6',
						cursor: 'pointer',
					},
				},
			},
			'& li:nth-child(1)': {
				marginLeft: '0px',
			},
		},
	},

	rightLogin: {
		float: 'left',
		marginTop: '10px',
	},

	loginButton: {
		float: 'left',
		fontFamily: 'Rubik',
		fontStyle: 'normal',
		fontWeight: '500',
		fontSize: '16px',
		lineHeight: '50%',
		color: '#ffffff',
		opacity: '1.0',
		marginRight: '24px',
		marginTop: '11px',
		transition: 'color .5s, opacity .5s',

		'&:hover': {
			color: '#dddddd',
			opacity: '0.6',
			cursor: 'pointer',
		},
	},

	rightLine: {
		float: 'left',
		background: '#F2F2F2',
		opacity: '0.3',
		width: '1px',
		height: '24px',
		marginRight: '24px',
		marginTop: '4px',
	},

	registerButton: {
		marginTop: '-10px',
		float: 'left',
		padding: '14px 32px',
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
			fontSize: '16px',
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
