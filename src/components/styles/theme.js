import { createMuiTheme } from '@material-ui/core';

const theme = createMuiTheme({
    palette: {
        type: 'dark',
        primary: {
            main: '#13FBD0',
            dark: '#1A6951',
        },
        secondary: {
            main: '#FD2C7B',
        },
        background: {
            default: '#10042B',
            paper: '#10042B',
        },
        divider: '#FD3F8B',
        text: {
            primary: 'rgb(245, 255, 253)',
            disabled: 'rgba(245, 255, 253, 0.5)',
            secondary: 'rgba(245, 255, 253, 0.7)',
        },
    },
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
            fontSize: 16,
        },
        body1: {
            fontSize: 14,
        },
        body2: {
          fontSize: 14,
          fontWeight: 300,
        }
    },
});

export default theme;
