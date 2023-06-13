import { Box, styled } from "@mui/material";
import { Section } from "../../globalStyles";
import banner from "../../assets/service-banner.jpg"

export const ServiceSection = styled(Section)(({theme}) => ({
	position: 'relative',
	background: 'rgb(255 255 255 / .92)',

	'&::after': {
		position: 'absolute',
		content: '""',
		inset: 0,
		backgroundImage: `url(${banner})`,
		backgroundPosition: 'center',
		backgroundSize: 'cover',
		zIndex: -1,
	}
}))

export const ServiceGrid = styled(Box)(({theme}) => ({
	display: 'grid',
	gridTemplateColumns: '1fr',
	gap: '2.5rem',

	'@media screen and (min-width: 768px)': {
		gridTemplateColumns: 'repeat(2, 1fr)',
	},

	'@media screen and (min-width: 992px)': {
		gridTemplateColumns: 'repeat(3, 1fr)',
	}
}))

export const ServiceCard = styled(Box)(({theme}) => ({
	display: 'flex',
	border: '1px solid',
	borderColor: theme.palette.secondary.opacity50,
	borderRadius: '.25rem',
	padding: '2rem',
	color: theme.palette.secondary.main,
	transition: 'all .3s ease',

	'& h4': {
		color: theme.palette.primary.main,
		transition: 'color .3s ease',
	},

	'& span': {
		color: theme.palette.neutral.main,
		transition: 'color .3s ease',
	},

	'& a': {
		display: 'block',
		color: theme.palette.primary.main,
		transition: 'color .3s ease',
	},

	'&:hover': {
		color: theme.palette.neutralLight.light,
		backgroundColor: theme.palette.secondary.main,

		'& h4, a, span': {
			color: theme.palette.neutralLight.light,
		}
	}
}))

export const ServiceCardContent = styled(Box)(({theme}) => ({
	paddingLeft: '1rem',
}))