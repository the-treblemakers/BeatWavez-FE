import React, { useEffect, useState } from 'react';
// import PropTypes from 'prop-types';
import SongbookItem from './SongbookItem';
import { getAllSongs } from '../../services/apiUtils';

const Songbook = () => {
    const [songs, setSongs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(0);
    const [currentSongs, setCurrentSongs] = useState([]);
    const [queue, setQueue] = useState([]);

    useEffect(() => {
        getAllSongs()
            .then((returnedSongs) => {
                setSongs(returnedSongs);
                setCurrentSongs(returnedSongs.slice(0, 20));
            })
            .finally(() => setLoading(false));
    }, [currentPage, currentSongs]);

    const handlePageChange = (currentPage) => {
        setCurrentPage(currentPage + 1);
        const newPage = songs.slice(20, 40);
        setCurrentSongs(newPage);
        console.log(songs.length, newPage);
    };

    const handleAddToQueue = (song) => {
        setQueue(...queue, song);
    };

    if(loading) return <h1>Loading...</h1>;

    return (
        <ul aria-label='songs'>
            <button onClick={handlePageChange}>Next Page</button>
            {currentSongs.map((song, i) => (
                <>
                    <li key={song.title + i}>
                        <SongbookItem {...song} />
                    </li>
                    <button 
                        onClick={handleAddToQueue}>Add to queue</button>
                    {/* <button>Flag as a bad video</button> */}
                </>
            ))}
        </ul>
    );
};

// Songbook.propTypes = {
//     songbookItems: PropTypes.arrayOf(
//         PropTypes.shape({
//             title: PropTypes.string.isRequired,
//             thumbnail: PropTypes.string.isRequired,
//             channelName: PropTypes.string.isRequired,
//         })
//     ),
// };

export default Songbook;
