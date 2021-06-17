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
        background: '#F96D10',
    },
    menu: {
        border: 'solid #060836 2px',
        borderRadius: '3px',
        boxShadow: '0px 0px 0px 0px rgb(0 0 0 / 0%)',   
    }
});