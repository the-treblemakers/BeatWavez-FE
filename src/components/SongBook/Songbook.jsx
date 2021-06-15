import React, { useEffect, useState } from 'react';
// import PropTypes from 'prop-types';
import SongbookItem from './SongbookItem';

const Songbook = () => {
    const [songs, setSongs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [queue, setQueue] = useState([]);

    useEffect(() => {
        fetch('https://beatwavez-dev.herokuapp.com/api/v1/songs/')
            .then(res => res.json())  
            .then((song) => setSongs(song))
            .finally(() => setLoading(false));
    }, []);

    const handleAddToQueue = (video) => {
        setQueue(video);
    };

    if(loading) return <h1>Loading...</h1>;

    return (
        <ul aria-label='songs'>
            {songs.map((song, i) => (
                <>
                    <li key={song.title + i}>
                        <SongbookItem {...song} />
                    </li>
                    <button 
                        onClick={handleAddToQueue}
                    >Add to queue</button>
                    {/* <button>Flag as a bad video</button> */}
                </>
            ))}
        </ul>
    );
};

export default Songbook;
