import { createMuiTheme } from '@material-ui/core';
import { ArrowRight } from '@material-ui/icons';

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
            fontWeight: 600,
        },
        h3: {
            fontSize: 18,
            body1: {
                fontSize: 16,
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
    }
});
