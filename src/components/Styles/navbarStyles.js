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
        color: '#F96D10',
    },
    menu: {
        border: 'solid #F96D10 2px',
        borderRadius: '1px',
        boxShadow: "#F96D10 0px 0px 5px",     
    }
});