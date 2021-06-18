import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles({
    appBar: {
        minHeight: 55,
        alignItems: 'center',
        justifyContent: 'center',
    },
    appShadow: {
        boxShadow: '0px 0px 0px 0px rgb(0 0 0 / 0%)',   
    },
    selected: {
        color: '#10042B',
    },
    menu: {
        border: 'solid #F96D10 2px',
        borderRadius: '1px',
        boxShadow: "#F96D10 0px 0px 8px",
        background: '#F96D10',
        color: "rgb(245, 255, 253)"     
    },
    menuButton: {
        color: "#F96D10",
    }
});