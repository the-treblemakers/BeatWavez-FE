import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
    media: {
<<<<<<< HEAD
        height: 0,
        paddingTop: '100%', 
=======
        width: "15rem",
        height: 'auto',
>>>>>>> a51710c9985d35b170b29d17cef2ff3878050dde
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
<<<<<<< HEAD
=======
    bio: {
        width: "20rem"
    },
>>>>>>> a51710c9985d35b170b29d17cef2ff3878050dde
}));