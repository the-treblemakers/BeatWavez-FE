import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Typography, Card, CardMedia, CardContent  } from '@material-ui/core';

const SongbookItem = ({ title, thumbnail }) => (
    <CardContent>
        <Grid container direction="row">
        <img src={thumbnail} alt={title} />
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
