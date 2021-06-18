import { makeStyles } from '@material-ui/core';
import { borderRadius } from '@material-ui/system';

export const useStyles = makeStyles({
    appBar: {
        minHeight: 55,
        alignItems: 'center',
        justifyContent: 'center',
    },
    appShadow: {
        boxShadow: '0px 0px 0px 0px rgb(0 0 0 / 0%)',   
    },
    menu: {
        border: 'solid #F96D10 2px',
        borderRadius: '1px',
        boxShadow: "#F96D10 0px 0px 8px",
        background: '#F96D10',
        color: "rgb(245, 255, 253)"     
    },
    menuButton: {
        // color: "#F96D10",
        color: "#10042B",
        "&:hover": {
            color: "#F96D10"
        }
    },
    menuItem: {
        "&:hover": {
            background: "transparent",
            borderBottom: "#13FBD0 3px solid",
            borderRadius: "2px",
            // color: "#10042B",
            transition: "0.1s ease-in-out"
        }
    }
    // icon: {
    //     boxShadow: 'rgb(245, 255, 253) 0px 0px 10px',
    //     borderRadius: '50%'
    // }
});