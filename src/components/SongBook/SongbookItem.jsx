import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Typography, Card, CardMedia, CardContent  } from '@material-ui/core';
import AlbumIcon from '@material-ui/icons/Album';
import MusicVideoIcon from '@material-ui/icons/MusicVideo';
import QueueMusicIcon from '@material-ui/icons/QueueMusic';

const SongbookItem = ({ title, thumbnail }) => (
    <CardContent>
        <Grid container direction="column">
        <QueueMusicIcon color="primary"/>
        <Typography variant="body2">{title} </Typography>
        </Grid>
    </CardContent>
);

SongbookItem.propTypes = {
    title: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
    // channelName: PropTypes.string.isRequired,
};

export default SongbookItem;
