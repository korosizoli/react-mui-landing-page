import { Box, styled } from "@mui/material";
import { Section } from "../../globalStyles";

export const ChooseSection = styled(Section)(({theme}) => ({
	paddingBlock: '100px 0',
	backgroundColor: theme.palette.primary.main,
}))

export const ChooseGrid = styled(Box)(({theme}) => ({
	display: 'grid',
	gridTemplateColumns: '1fr',

	'@media screen and (min-width: 992px)': {
		gridTemplateColumns: '1fr 1fr',
	}
}))

export const Column = styled(Box)(({theme}) => ({
	paddingInline: '2.5rem',
}))

export const ColumnContainer = styled(Box)(({theme}) => ({
	maxWidth: '570px',
	marginInline: 'auto',
}))

export const ChooseCard = styled(Box)(({theme}) => ({
	display: 'flex',
	gap: '1rem',
	alignItems: 'flex-start',
	marginBlock: '3rem',
}))