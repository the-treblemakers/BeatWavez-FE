import { createMuiTheme } from '@material-ui/core';

export const theme = createMuiTheme({
    typography: {
        fontFamily: [
            'Noto Sans JP', 
            'sans-serif',
        ].join(','),
        fontSize: 16,
        h1: {
            fontFamily: [
                'Monoton', 
                'cursive',
            ].join(','),
            fontSize: 26,
        },
        h2: {
            fontSize: 20,
        },
        h3: {
            fontSize: 18,
        }
    },
    palette: {
        primary: {
            main: '#8838BC'
        },
        secondary: {
            main: '#F96D10'
        }
    }
});
