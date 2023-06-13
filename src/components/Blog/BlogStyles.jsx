import { Box, Link, Typography, styled } from "@mui/material";

export const BlogGrid = styled(Box)(({theme}) => ({
	display: 'grid',
	gridTemplateColumns: '1fr',
	gap: '2rem',

	'@media screen and (min-width: 992px)': {
		gridTemplateColumns: 'repeat(3, 1fr)',
	}
}))

export const BlogCard = styled(Box)(({theme}) => ({
	'& img':{
		transition: 'transform 1s ease',
	},

	'&:hover img': {
		transform: 'scale(1.25)',
	}
}))

export const BlogCardBanner = styled(Box)(({theme}) => ({
	position: 'relative',
	width: '100%',
	objectFit: 'cover',
	overflow: 'hidden',
	borderRadius: '.25rem',
	aspectRatio: '3 / 2',
	marginBottom: '1.5rem',

	'& img': {
		width: '100%',
		height: 'auto',
		transform: 'scale(1.05)',
	}
}))

export const CardTag = styled(Box)(({theme}) => ({
	position: 'absolute',
	bottom: 0,
	left: '1rem',
	padding: '.25rem .75rem',
	backgroundColor: theme.palette.secondary.main,
	borderRadius: '.25rem .25rem 0 0',
}))

export const TagLink = styled(Link)(({theme}) => ({
	width: 'max-content',
	fontFamily: ['Poppins', 'sans-serif'].join(','),
	fontSize: '.875rem',
	fontWeight: 400,
	textDecoration: 'none',
	transition: 'color .2s ease',
	color: theme.palette.neutralLight.light,

	'&:hover': {
		color: theme.palette.primary.main,
	}
}))

export const BlogCardContent = styled(Box)(({theme}) => ({
	paddingInline: '1.5rem'
}))

export const CardTitle = styled(Typography)(({theme}) => ({
	color: theme.palette.primary.main,
	transition: 'color .2s ease',
	marginBlock: '.5rem',

	'&:hover': {
		color: theme.palette.secondary.main,
	}
}))

export const CardBtn = styled(Link)(({theme}) => ({
	width: 'max-content',
	fontFamily: ['Poppins', 'sans-serif'].join(','),
	fontSize: '.875rem',
	fontWeight: 600,
	textDecoration: 'none',
	transition: 'color .2s ease',

	'&:hover': {
		color: theme.palette.secondary.main,
	}
}))