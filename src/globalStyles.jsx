import { Box, Button, Container, Link, Typography, styled } from "@mui/material";

export const Section = styled(Box)(({theme}) => ({
	paddingBlock: '100px',
}))

export const Wrapper = styled(Container)(({theme}) => ({
	maxWidth: '600px',

	'@media (min-width: 768px)': {
		maxWidth: '720px',
   },
   '@media (min-width: 992px)': {
		maxWidth: '960px',
   },
   '@media (min-width: 1200px)': {
		maxWidth: '1140px',
   },
}))

export const SectionHeader = styled(Box)(({theme}) => ({
	maxWidth: '700px',
	marginInline: 'auto',
	marginBottom: '50px',
	textAlign: 'center',
}))

export const SectionSubtitle = styled(Typography)(({theme}) => ({
	color: theme.palette.secondary.main,
}))

export const SectionTitle = styled(Typography)(({theme}) => ({
	paddingBlock: '20px 30px',
}))

export const Text = styled(Typography)(({theme}) => ({
	color: theme.palette.neutral.main,
}))

export const BtnPrimary = styled(Button)(({theme}) => ({
	position: 'relative',
	borderColor: theme.palette.secondary.opacity50,
	padding: '.875rem 1.75rem',
	borderRadius: '.25rem',
	color: theme.palette.secondary.main,

	'&::before': {
		position: 'absolute',
		content: '""',
		inset: 0,
		backgroundColor: theme.palette.secondary.opacity10,
		transform: 'scaleX(0)',
    transformOrigin: 'right',
    transition: 'transform 0.3s ease',
	},

	'&:hover': {
		borderColor: theme.palette.secondary.main,
	},

	'&:hover::before': {
		transform: 'scaleX(1)',
    transformOrigin: 'left',
	}
}))

export const BtnText = styled(Link)(({theme}) => ({
	width: 'max-content',
	fontFamily: ['Poppins', 'sans-serif'].join(','),
	fontSize: '.875rem',
	fontWeight: 600,
	textDecoration: 'none',
}))