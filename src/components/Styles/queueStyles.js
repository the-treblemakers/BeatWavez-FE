import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles({
    queueItem: {
        background: 'rgba(245, 255, 253, 1)',
        color: '#10042B',
        borderRadius: "3px",
        marginTop: '0.5rem',
        marginBottom: '0.5rem',
    },
    current: {
        background: 'rgba(245, 255, 253, 1)',
        color: '#10042B',
        borderRadius: "3px",
        marginTop: '0.5rem',
        marginBottom: '0.5rem',
        border: "#FD2C7B 2px solid", 
        boxShadow: "#FD2C7B 0px 0px 6px",
    }
});