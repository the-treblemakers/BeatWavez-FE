import React from 'react';
import PropTypes from 'prop-types';
<<<<<<< HEAD
import { Grid, Typography, Card, CardMedia, CardContent  } from '@material-ui/core';
import AlbumIcon from '@material-ui/icons/Album';
import MusicVideoIcon from '@material-ui/icons/MusicVideo';
import QueueMusicIcon from '@material-ui/icons/QueueMusic';

const SongbookItem = ({ title, thumbnail }) => (
    <CardContent>
        <Grid container direction="column">
        <QueueMusicIcon color="primary"/>
        <Typography variant="body2">{title} </Typography>
=======
import { Grid, Typography, CardContent } from '@material-ui/core';
import QueueMusicIcon from '@material-ui/icons/QueueMusic';

const SongbookItem = ({ title }) => (
    <CardContent>
        <Grid container direction="column">
            <QueueMusicIcon color="primary" />
            <Typography variant="body2">{title} </Typography>
>>>>>>> a51710c9985d35b170b29d17cef2ff3878050dde
        </Grid>
    </CardContent>
);

SongbookItem.propTypes = {
    title: PropTypes.string.isRequired,
};

export default SongbookItem;
