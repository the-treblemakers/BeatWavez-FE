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
        p: {
            fontSize: 16
=======
        body1: {
            fontSize: 16,
>>>>>>> e85fa1aee9ae7645b8ec08d15ba164e0bc1d431d
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
