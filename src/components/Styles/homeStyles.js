import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles({
    root: {
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
    outlineButton: {
        borderRadius: "2px",
        border: "#13FBD0 3px solid",
    },
    selectedButton: {
        borderRadius: "2px",
        border: "#13FBD0 3px solid",
        color: "#13FBD0"
    },
    selected: {
        color: "#F96D10"
    }
});