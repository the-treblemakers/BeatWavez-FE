import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
    media: {
        width: "15rem",
        height: 'auto',
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
    bio: {
        width: "20rem"
    },
}));

