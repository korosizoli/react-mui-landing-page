import { Box, styled } from "@mui/material";

export const AboutGrid = styled(Box)(({theme}) => ({
	display: 'grid',
	gridTemplateColumns: '1fr',
	gap: '3rem',
	alignItems: 'center',

	'@media screen and (min-width: 992px)': {
		gridTemplateColumns: '.8fr 1fr'
	}
}))

export const AboutBanner = styled(Box)(({theme}) => ({
	'& img': {
		width: '100%',
		maxHeight: '600px',
		objectFit: 'cover',
	},
}))

export const AboutContent = styled(Box)(({theme}) => ({

}))

export const AboutList = styled(Box)(({theme}) => ({
	display: 'grid',
	gridTemplateColumns: '1fr',
	gap: '1rem',
	paddingBlock: '1rem 0',

	'@media screen and (min-width: 576px)': {
		gridTemplateColumns: '1fr 1fr',
	}
}))

export const AboutListItem = styled(Box)(({theme}) => ({
	display: 'flex',
	gap: '.25rem',
	alignItems: 'center',
}))