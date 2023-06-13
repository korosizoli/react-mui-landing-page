import { Box, Button, Link, styled } from "@mui/material";
import { Wrapper } from "../../globalStyles";

export const Header = styled(Box)(({theme}) => ({
	position: 'absolute',
	width: '100%',
	height: '40px',
	borderBottom: '1px solid',
	borderBottomColor: theme.palette.neutralLight.opacity10,
}))

export const FlexBox = styled(Box)(({theme}) => ({
	display: 'flex',
	justifyContent: 'space-between',
}))

export const ContactContainer = styled(Box)(({theme}) => ({
	display: 'flex',
	height: '40px',
	color: theme.palette.neutralLight.main,
}))

export const ContactBox = styled(Box)(({theme}) => ({
	display: 'inline-flex',
	alignItems: 'center',
}))

export const SocialBtn = styled(Link)(({theme}) => ({
	position: 'relative',
	display: 'grid',
	placeContent: 'center',
	border: 'none',
	borderRadius: 0,
	height: '40px',
	width: '40px',
	color: theme.palette.neutralLight.light,
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

export const NavBar = styled(Box)(({theme}) => ({
	position: 'relative',
}))

export const NavContainer = styled(Box)(({theme}) => ({
	display: 'flex',
	alignItems: 'center',
	width: '100%',
	height: '80px',
	transition: 'all .3s ease',
}))

export const NavWrapper = styled(Wrapper)(({theme}) => ({
	display: 'flex',
	justifyContent: 'space-between',
	alignItems: 'center',
}))

export const LogoHolder = styled(Box)(({theme}) => ({
	width: 'max-content',
	objectFit: 'cover',
	cursor: 'pointer',

	'& img': {
		height: '40px',
	}
}))

export const Menu = styled(Box)(({theme}) => ({
	display: 'none',

	'@media screen and (min-width: 992px)': {
		display: 'flex',
		gap: '1.25rem',
	}
}))

export const MenuLink = styled(Box)(({theme}) => ({
	position: 'relative',
	cursor: 'pointer',
	fontFamily: ['Poppins', 'sans-serif'].join(','),
	fontWeight: 500,
	fontSize: '.875rem',
	textTransform: 'uppercase',
	transition: 'color .2s ease',

	'& a': {
		display: 'inline-flex',
		alignItems: 'center',
		height: '80px',
	},

	'&:hover': {
		color: theme.palette.secondary.main,
	},

	'&::after': {
		position: 'absolute',
		content: '""',
		left: 0,
		bottom: 0,
		width: '100%',
		height: '3px',
		backgroundColor: theme.palette.secondary.main,
		transform: 'scaleX(0)',
		transformOrigin: 'right',
		transition: 'transform .3s ease',
	},

	'&:hover::after': {
		transform: 'scaleX(1)',
		transformOrigin: 'left',
	}
}))

export const NavCta = styled(Box)(({theme}) => ({
	display: 'none',

	'@media screen and (min-width: 992px)': {
		display: 'flex',
		gap: '.5rem',
	}
}))

export const NavBtnWrapper = styled(Box)(({theme}) => ({
	cursor: 'pointer',
	transition: 'color .2s ease',

	'&:hover': {
		color: theme.palette.secondary.main,
	},

	'@media screen and (min-width: 992px)': {
		display: 'none',
	}
}))

export const MobileMenu = styled(Box)(({theme}) => ({
	position: 'fixed',
	top: 0,
	right: 0,
	width: '300px',
	height: '100vh',
	height: '100dvh',
	display: 'block',
	backgroundColor: theme.palette.neutralLight.light,
}))

export const MobileMenuWrapper = styled(Box)(({theme}) => ({
}))

export const CloseButtonWrapper = styled(Box)(({theme}) => ({
	display: 'flex',
	padding: '1rem',
	justifyContent: 'flex-end',
	
}))

export const MobileMenuLink = styled(Box)(({theme}) => ({
	display: 'flex',
	marginInline: '2rem',
	

	'&:hover': {
		color: theme.palette.secondary.main,
	},

	'& a': {
		cursor: 'pointer',
		paddingBlock: '1rem',
		width: '100%',
		fontFamily: ['Poppins', 'sans-serif'].join(','),
		fontWeight: 500,
		fontSize: '1rem',
		textTransform: 'uppercase',
		transition: 'color .2s ease',
	},

	'&:not(:last-child)': {
		borderBottom: '1px solid rgb(0 0 0 / .15)'
	}
}))

export const Overlay = styled(Box)(({theme}) => ({
	position: 'fixed',
	inset: 0,
	backgroundColor: theme.palette.primary.main,
	
}))