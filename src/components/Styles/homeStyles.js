import { makeStyles, useMediaQuery } from '@material-ui/core';

export const useStyles = makeStyles(theme => ({
    // base: {
    //     root: {
    //         "& .MuiGrid-container": {
    //             width: '100%',
    //             justifyContent: "center",
    //             alignItems: "center"
    //         },
    //     }                
    // },
    root: {
        width: "100%",
        // [theme.breakpoints.up('xs')]: {
        //     "& .MuiGrid-container": {
        //         width: '100%',
                
        //     },
        // },
        // [theme.breakpoints.up('sm')]: {
        //     "& .MuiGrid-container": {
        //         width: '50%',
        //         backgroundColor: "#ffff00"
        //     },
        // },
        // [theme.breakpoints.up('md')]: {
        //     "& .MuiGrid-container": {
        //         width: '50%',
        //         backgroundColor: "#fffff0"
        //     },
        // },
        // [theme.breakpoints.up('lg')]: {
        //     "& .MuiGrid-container": {
        //         width: '50%',
        //         backgroundColor: "#fff000"
        //     },
        // },
        // [theme.breakpoints.up('xl')]: {
        //     "& .MuiGrid-container": {
        //         width: '50%',
        //         backgroundColor: "#ffffff"
        //     },
        // },
        "& .MuiAccordionDetails-root": {
            color: '#10042B',
            background: 'rgb(245, 255, 253)',
            border: '#FD2C7B 3px solid',
            boxShadow: "3px 0px 10px #FD2C7B",
            borderRadius: '2px'
        }
    },
    icon: {
        color: "#FD2C7B",
    },
    solidButton: {
        borderRadius: "2px",
        boxShadow: "4px 4px 1px #F96D10",
    },
    selected: {
        transition: "0.3s ease-in",
        color: "#F96D10"
    },
    logoContainer: {
        width: "6rem",
        height: "6rem",
        background: "rgb(245, 255, 253)",
        borderRadius: "50%",
        boxShadow: "0px 0px 85px rgb(245, 255, 253)",
        position: "absolute",
        top: 26,
        zIndex: 1,
    },
    logo: {
        zIndex: 2,
    },
    logoFont: {
        zIndex: 3,
        fontSize: 40,
        margin: "0.3rem"
    }
}));