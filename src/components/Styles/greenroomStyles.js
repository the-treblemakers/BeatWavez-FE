import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles({
    accordion: {
        width: "100%"
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