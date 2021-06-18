import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Snackbar, Typography, IconButton } from '@material-ui/core';
import CloseSharpIcon from '@material-ui/icons/CloseSharp';
import { useStyles } from '../Styles/greenroomStyles';

const SnackboxAlert = ({ roomInfo }) => {
    const [open, setOpen] = useState(true);

    const classes = useStyles();

    const handleClose = () => {
        setOpen(false);
    }

    return (
        <Snackbar
        open={open}
        className={classes.snackbar}
        anchorOrigin={{
            vertical: 'top',
            horizontal: 'center',
        }}
        message={
            <>
                <Typography
                    variant="body1"
                    color="secondary"
                    style={{ margin: "0.7rem" }}>
                    Hey {roomInfo.stageName}!
                </Typography>
                <Typography
                    variant="body2"
                    style={{ margin: "0.7rem" }}>
                    To find your song, you can flip through the songbook or search your heart out and press + to add it to the queue.
                </Typography>
                <Typography
                    style={{ margin: "0.7rem" }}
                    variant="body2">
                    Hangout here and chat with your party while the host plays the karaoke queue on a shared screen.
                </Typography>
                <Typography
                    style={{ margin: "0.7rem" }}
                    variant="body2">
                    If you're the host, head over to the partyroom to share the karaoke magic with everyone!
                </Typography>
            </>
        }
        autoHideDuration={15000}
        onClose={handleClose}
        action={
            <IconButton onClick={handleClose}>
                <CloseSharpIcon color="primary" />
            </IconButton>
        } />
    )
}

SnackboxAlert.propTypes = {
    roomInfo: PropTypes.object.isRequired,
}

export default SnackboxAlert;
