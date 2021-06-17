import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
    media: {
        height: 0,
        paddingTop: '100%', 
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
}));