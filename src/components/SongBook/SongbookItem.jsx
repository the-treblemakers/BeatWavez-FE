import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Typography, CardContent } from '@material-ui/core';
import QueueMusicIcon from '@material-ui/icons/QueueMusic';

const SongbookItem = ({ title }) => (
    <CardContent>
        <Grid container direction="column">
            <QueueMusicIcon color="primary" />
            <Typography variant="body2">{title} </Typography>
        </Grid>
    </CardContent>
);

SongbookItem.propTypes = {
    title: PropTypes.string.isRequired,
};

export default SongbookItem;
