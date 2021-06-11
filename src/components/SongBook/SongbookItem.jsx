import React from 'react';
import PropTypes from 'prop-types';

const SongbookItem = ({ title, thumbnail, channelName }) => (
    <>
        <img src={thumbnail} alt={title} />
        <span>Song: {title} </span>
        <span>Channel: {channelName} </span>
    </>
);

SongbookItem.propTypes = {
    title: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
    channelName: PropTypes.string.isRequired,
};

export default SongbookItem;
