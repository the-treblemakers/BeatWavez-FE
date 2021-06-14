import React, { useEffect, useState } from 'react';
// import PropTypes from 'prop-types';
import SongbookItem from './SongbookItem';

const Songbook = () => {
    const [songs, setSongs] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://beatwavez-dev.herokuapp.com/api/v1/songs/')
            .then(res => res.json())  
            .then((song) => setSongs(song))
            .finally(() => setLoading(false));
    }, []);

    if(loading) return <h1>Loading...</h1>;

    return (
        <ul aria-label='songs'>
            {songs.map((song, i) => (
                <li key={song.title + i}>
                    <SongbookItem {...song} />
                </li>
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
