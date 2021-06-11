import React from 'react';
import PropTypes from 'prop-types';
import SongbookItem from './SongbookItem';

const Songbook = ({ songbookItems }) => (
    <ul aria-label='songbookItems'>
        {songbookItems.map((song) => (
            <li key={song.title}>
                <SongbookItem {...SongbookItem} />
            </li>
        ))}
    </ul>
);

Songbook.propTypes = {
    songbookItems: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string.isRequired,
            thumbnail: PropTypes.string.isRequired,
            channelName: PropTypes.string.isRequired,
        })
    ),
};

export default Songbook;
