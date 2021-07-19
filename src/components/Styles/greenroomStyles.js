import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles({
    root: {
        width: "100%",
        "& .MuiAccordionDetails-root": {
            border: '#13FBD0 3px solid',
            boxShadow: "3px 0px 10px #13FBD0",
            borderRadius: '2px'
        },
        "& .MuiGrid-justify-m-flex-end": {
            justify: "flex-end",
        },
    },
    accordion: {
        width: "100%",
    },
    snackbar: {
        top: '90',
    },
    channel: {
        color: "#10042B"
    },
    menuItem: {
        "&:hover": {
            background: "transparent",
            borderBottom: "#F96D10 3px solid",
            borderRadius: "2px",
            // color: "#10042B",
            transition: "0.1s ease-in-out"
        }
    }
});