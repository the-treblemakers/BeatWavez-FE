import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles({
    queueItem: {
        border: "#FD2C7B 2px solid", 
        boxShadow: "#FD2C7B 0px 0px 6px",
        borderRadius: "3px",
        marginTop: '0.5rem',
        marginBottom: '0.5rem',
    },
    current: {
        border: "#F96D10 2px solid", 
        boxShadow: "#F96D10 0px 0px 6px",
        borderRadius: "3px",
        marginTop: '0.5rem',
        marginBottom: '0.5rem',
    }
});