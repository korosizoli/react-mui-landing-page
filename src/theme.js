import { createTheme } from "@mui/material";

export const theme = createTheme({
	palette: {
		primary: {
			main: 'rgb(38 43 62 / 1)',
			light: 'rgb(49 56 81 / 1)',
			contrastText: '#fff',
		},
		secondary: {
			main: 'rgb(200 157 102 / 1)',
			opacity10: 'rgb(200 157 102 / .1)',
			opacity50: 'rgb(200 157 102 / .4)',
			opacity80: 'rgb(200 157 102 / .8)',
		},
		neutral: {
			main: 'rgb(155 155 155 / 1)'
		},
		neutralLight: {
			main: 'rgb(255 255 255 / .75)',
			light: 'rgb(255 255 255 / 1)',
			opacity10: 'rgb(255 255 255 / .15)',
			opacity50: 'rgb(255 255 255 / .5)',
		},
		social: {
			facebook: '#0165E1',
			twitter: '#1D9BF0',
			instagram: '#833AB4',
			youtube: '#FF0000',
		},
	},

	typography: {
		fontSize: 16,
		fontFamily: ['Poppins', 'sans-serif'].join(','),

		h1: {
			fontFamily: ['Playfair Display', 'serif'].join(','),
			fontWeight: 700,
			lineHeight: 1.2,
			fontSize: '3rem',

			'@media (min-width: 992px)': {
				fontSize: '3.75rem',
			},
		},

		h2: {
			fontFamily: ['Playfair Display', 'serif'].join(','),
			fontWeight: 700,
			lineHeight: 1.2,
			fontSize: '2.25rem',
		},

		h3: {
			fontFamily: ['Playfair Display', 'serif'].join(','),
			fontWeight: 700,
			lineHeight: 1.2,
			fontSize: '1.875rem',
		},

		h4: {
			fontFamily: ['Playfair Display', 'serif'].join(','),
			fontWeight: 500,
			lineHeight: 1.2,
			fontSize: '1.375rem',
		},

		h5: {
			fontFamily: ['Playfair Display', 'serif'].join(','),
			fontWeight: 700,
			lineHeight: 1.2,
			fontSize: '1rem',
		},

		subtitle1: {
			fontFamily: ['Poppins', 'sans-serif'].join(','),
			fontSize: '1rem',
			fontWeight: 600,
			textTransform: 'uppercase',
		},

		body1: {
			fontSize: '1.125rem',
			lineHeight: 1.5,
			fontWeight: 400,
		},

		body2: {
			fontSize: '1rem',
		},

		body3: {
			fontFamily: ['Poppins', 'sans-serif'].join(','),
			fontSize: '.875rem',
		},
	},

	breakpoints: {
		values: {
			xs: 0,
			sm: 576,
			md: 768,
			lg: 992,
			xl: 1200 
		},
	},
})

theme.components.MuiButton = {
	defaultProps: {
		disableRipple: false,
		disableElevation: true,		
	},

	styleOverrides: {
		root: {
			borderRadius: '.25rem',
			border: '1px solid',
			fontFamily: ['Playfair Display', 'serif'].join(','),
			textTransform: 'capitalize',
			fontWeight: '500',
			fontSize: '1.125rem',
		},
	},
}
