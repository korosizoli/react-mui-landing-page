import { Box, InputBase, Link, Typography, styled } from "@mui/material";
import { BtnPrimary, Section } from "../../globalStyles";

export const FooterSection = styled(Section)(({theme}) => ({
	paddingBlock: '100px 50px',
	backgroundColor: theme.palette.primary.main,
}))

export const FooterGrid = styled(Box)(({theme}) => ({
	display: 'grid',
	gridTemplateColumns: '1fr',
	gap: '1rem',

	'@media screen and (min-width: 576px)': {
		gridTemplateColumns: 'repeat(2, 1fr)',
	},

	'@media screen and (min-width: 992px)': {
		gridTemplateColumns: '1fr .75fr .75fr 1fr',
	},
}))

export const FooterCol = styled(Box)(({theme}) => ({
	padding: '1rem',
	borderRadius: '.25rem',
}))

export const FooterInput = styled(InputBase)(({theme}) => ({
	border: '1px solid',
	borderColor: theme.palette.neutralLight.opacity50,
	borderRadius: '.25rem',
	padding: '.75rem',
	fontSize: '.875rem',
	color: theme.palette.neutralLight.light,
	marginBlock: '1.5rem .75rem',

	'& .MuiInputBase-input': {
		padding: 0,
	}
}))

export const FooterList = styled(Box)(({theme}) => ({
	display: 'flex',
	flexDirection: 'column',
	gap: '.5rem',
}))

export const FooterHeading = styled(Typography)(({theme}) => ({
	marginBottom: '1.5rem',
	textTransform: 'capitalize'
}))

export const FooterLink = styled(Typography)(({theme}) => ({
	cursor: 'pointer',
	color: theme.palette.neutralLight.main,
	transition: 'color .2s ease',
	maxWidth: 'max-content',
	
	'&:hover': {
		color: theme.palette.secondary.main,
	}
}))

export const FooterMuiLink = styled(Link)(({theme}) => ({
	color: theme.palette.neutralLight.main,
	transition: 'color .2s ease',
	maxWidth: 'max-content',
	textDecoration: 'none',

	'&:hover': {
		color: theme.palette.secondary.main,
	}
}))

export const LogoHolder = styled(Box)(({theme}) => ({
	width: 'max-content',
	objectFit: 'cover',
	marginBottom: '1.5rem',

	'& img': {
		height: '40px',
	}
}))

export const FooterSocialList = styled(Box)(({theme}) => ({
	display: 'flex',
	marginTop: '1.5rem',
	gap: '.5rem',
}))

export const SocialBtn = styled(Link)(({theme}) => ({
	position: 'relative',
	display: 'grid',
	placeContent: 'center',
	overflow: 'hidden',
	border: 'none',
	borderRadius: 0,
	height: '40px',
	width: '40px',
	color: theme.palette.neutralLight.light,
	backgroundColor: theme.palette.neutralLight.opacity10,
	borderRadius: '.25rem',
	transition: 'color .2s ease',

	'&::before': {
		position: 'absolute',
		content: '""',
		inset: 0,
		backgroundColor: theme.palette.neutralLight.light,
		transform: 'scaleY(0)',
    transformOrigin: 'bottom',
    transition: 'transform .2s ease',
	},

	'&:hover': {
		borderColor: theme.palette.secondary.main,
	},

	'&:hover::before': {
		transform: 'scaleY(1)',
	}
}))

export const FooterBtn = styled(BtnPrimary)(({theme}) => ({
	padding: '.25rem .75rem',
	maxWidth: 'max-content',
	fontSize: '1rem',
}))