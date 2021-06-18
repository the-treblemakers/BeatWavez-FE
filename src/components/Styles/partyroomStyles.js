import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles({
    root: {
        width: "100vw",
        "& .MuiAccordionDetails-root": {
            border: '#FFD904 3px solid',
            boxShadow: "3px 0px 10px #FFD904",
            borderRadius: '2px'
        }
    },
    base: {
        width: "100%"
    },
});