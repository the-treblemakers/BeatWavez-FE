import React, { useEffect, useState } from 'react';
import SongbookItem from './SongbookItem';
import { getAllSongs } from '../../services/apiUtils';

const Songbook = () => {
    const [songs, setSongs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const [currentSongs, setCurrentSongs] = useState([]);
    const [queue, setQueue] = useState([]);

    useEffect(() => {
        getAllSongs()
            .then((returnedSongs) => {
                setSongs(returnedSongs);
                setCurrentSongs(returnedSongs.slice(0, 20));
            })
            .finally(() => setLoading(false));
    }, []);

    const handlePageChange = () => {
        setCurrentPage(currentPage + 1);

        const sliceMathStart = currentPage * 20;
        const sliceMathEnd = sliceMathStart + 20;
        const newPage = songs.slice(sliceMathStart, sliceMathEnd);

        setCurrentSongs(newPage);
    };

    const handleAddToQueue = (song) => {
        setQueue(...queue, song);
    };

    if(loading) return <h1>Loading...</h1>;

    return (
        <ul aria-label='songs'>
            <button onClick={handlePageChange}>Next Page</button>
            {currentSongs.map((song, i) => (
                <li key={song.title + i}>
                    <SongbookItem {...song} />
                    <button 
                        onClick={handleAddToQueue}>Add to queue</button>
                    {/* <button>Flag as a bad video</button> */}
                </li>
            ))}
        </ul>
    );
};

export default Songbook;
