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
<<<<<<< HEAD
        },
        body1: {
            fontSize: 16,
        },
=======

        body1: {
            fontSize: 16,
        }
>>>>>>> ae8c7af7a5cf00deb43a3bbfa7df27cab99b7ab7
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
