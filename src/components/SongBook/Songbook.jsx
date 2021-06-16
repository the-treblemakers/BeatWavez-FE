import React, { useEffect, useState } from 'react';
import SongbookItem from './SongbookItem';
import Spinner from '../UI/Spinner';
import PropTypes from 'prop-types';
// import { getAllSongs } from '../../services/apiUtils';

const Songbook = ({ handleAddToQueue, stageName, loading, currentPage, setCurrentPage, currentSongs, setCurrentSongs }) => {
    useEffect(() => {

    }, [loading]);

    const handlePageChange = () => {
        setCurrentPage(currentPage + 1);

        const sliceMathStart = currentPage * 20;
        const sliceMathEnd = sliceMathStart + 20;
        const newPage = currentSongs.slice(sliceMathStart, sliceMathEnd);

        setCurrentSongs(newPage);
    };

    if(loading) return <Spinner />;

    return (
        <ul aria-label='songs'>
            <button onClick={handlePageChange}>Next Page</button>
            {currentSongs.map((song, i) => (
                <li key={song.title + i}>
                    <SongbookItem {...song} />
                    <button

                        onClick={() => handleAddToQueue(song)}>Add to queue</button>
                    {/* <button>Flag as a bad video</button> */}
                </li>
            ))}
        </ul>
    );
};

Songbook.propTypes = {
    handleAddToQueue: PropTypes.func.isRequired,
    stageName: PropTypes.string.isRequired,
    loading: PropTypes.bool.isRequired,
    currentPage: PropTypes.number.isRequired,
    setCurrentPage: PropTypes.func.isRequired,
    currentSongs: PropTypes.array.isRequired,
    setCurrentSongs: PropTypes.func.isRequired
};

export default Songbook;
