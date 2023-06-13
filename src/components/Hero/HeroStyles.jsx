import { Box, Typography, styled } from "@mui/material";
import heroImage from '../../assets/hero.jpg'

export const HeroSection = styled(Box)(({theme}) => ({
	position: 'relative',
	paddingBlock: '300px',
	background: 'linear-gradient(to right, rgb(38 43 62 / .95) 5%, rgb(38 43 62 / .5))',

	'&::after': {
		position: 'absolute',
		content: '""',
		inset: 0,
		backgroundImage: `url(${heroImage})`,
		backgroundPosition: 'center',
		backgroundSize: 'cover',
		zIndex: -1,
	}
}))

export const HeroContent = styled(Box)(({theme}) => ({
	maxWidth: '570px',
}))

export const HeroSubtitle = styled(Typography)(({theme}) => ({
	color: theme.palette.neutralLight.light,
	marginBottom: '.75rem'
}))

export const HeroHeading = styled(Typography)(({theme}) => ({
	color: theme.palette.neutralLight.light,
}))

export const HeroText = styled(Typography)(({theme}) => ({
	color: theme.palette.neutralLight.main,
	marginBlock: '2rem',
}))