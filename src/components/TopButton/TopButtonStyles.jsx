import { Box, styled } from "@mui/material";

export const TopBtn = styled(Box)(({theme}) => ({
	position: 'fixed',
	bottom: '2.5rem',
	right: '2.5rem',
	width: '3rem',
	height: '3rem',
	display: 'grid',
	placeContent: 'center',
	backgroundColor: theme.palette.secondary.opacity80,
	borderRadius: '.25rem',
	cursor: 'pointer',
	transition: '.2s ease',

	'& .icon': {
		color: theme.palette.neutralLight.light,
		transform: 'rotate(-90deg)',
		transition: '.2s ease',
	},	

	'&:hover': {
		backgroundColor: theme.palette.secondary.main,
	},

	'&:hover .icon': {
		color: theme.palette.primary.main,
	}
}))