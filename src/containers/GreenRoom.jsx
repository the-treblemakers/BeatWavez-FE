import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Accordion, AccordionSummary, AccordionDetails, Typography, Grid } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import SearchBar from '../components/Search/SearchBar';
import SearchFilters from '../components/Search/SearchFilters';
import Songbook from '../components/SongBook/Songbook';
import Queue from '../components/Queue/Queue';
import Chat from '../components/Chat/Chat';
import { getAllSongs } from '../services/apiUtils';
import Spinner from '../components/UI/Spinner';

const GreenRoom = ({ handleNewMessage, roomInfo, newMessage, messageArray, setNewMessage, queue, handleAddToQueue }) => {
    const [query, setQuery] = useState('');
    const [songbook, setSongbook] = useState([]);
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const [currentSongs, setCurrentSongs] = useState([]);
    const [channelFilter, setChannelFilter] = useState('');
    const [filteredSongs, setFilteredSongs] = useState([]);

    useEffect(() => {
        getAllSongs()
            .then((songbook) => {
                setSongbook(songbook);
                setCurrentSongs(songbook.slice(0, 20));
            })
            .finally(() => setLoading(false));
    }, []);

    useEffect(() => {
        const filter = () => {
            const filteredResults = songbook.filter((song) => {
                const channelName = song.channelName;
                return channelName.includes(channelFilter);
            });

            return filteredResults;
        };
        setFilteredSongs(filter());
        setCurrentSongs(filteredSongs);
    }, [channelFilter]);

    function handleQueryChange(e) {
        setQuery(e.target.value);
    }

    function handleDropdownChange(e) {
        setChannelFilter(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();

        setLoading(true);

        const search = () => {
            if(query === '') return filteredSongs;
            return filteredSongs.filter((song) => {
                const title = song.title.toLowerCase();
                return title.includes(query.toLowerCase());
            });
        };
        const searchResults = search();
        setTimeout(() => {
            setCurrentSongs(searchResults);
            setLoading(false);
        }, 100);
    }

    return (
        <Grid container  
            direction="column" 
            alignItems="center" 
            justify="center">
            {roomInfo.roomName ?
                <Typography
                    variant="h2"
                    align="center">
            Welcome to the {roomInfo.roomName} room!
                </Typography>
                : 
                <Typography
                    variant="h2"
                    align="center">
                Welcome to the Green room!
                </Typography>
            }
            {/* DISPLAY ROOM NAME, STAGE NAME INSTRUCTIONS TO INVITE FRIENDS ALSO ADD FLAVOR/GLITTER!!!! In an alert? Or just on the page somewhere? */}
            <Accordion defaultExpanded>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                >
                    <Typography
                        variant="h3">
                        Songbook
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Grid container
                        direction="column" alignItems="center" justify="center">
                            <Grid container
                                direction="row"
                                alignItems="center"
                                justify="space-between">
                        <SearchFilters
                            handleDropdownChange={handleDropdownChange}
                        />
                        <SearchBar
                            query={query}
                            setQuery={setQuery}
                            handleQueryChange={handleQueryChange}
                            handleSubmit={handleSubmit}
                        />
                        </Grid>
                        {loading && <Spinner />}
                        {!loading &&
                            <Songbook
                                handleAddToQueue={handleAddToQueue}
                                stageName={roomInfo.stageName}
                                currentSongs={currentSongs}
                                setCurrentSongs={setCurrentSongs}
                                currentPage={currentPage}
                                setCurrentPage={setCurrentPage}
                                loading={loading}
                                songbook={filteredSongs}

                            />
                        }
                    </Grid>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}>
                    <Typography
                        variant="h3" >
                            Queue
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    {queue.length > 0 ?
                        <Queue
                            queue={queue}
                        />
                        : null}
                </AccordionDetails>
            </Accordion>
            
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                >
                    <Typography
                        variant="h3">
                        Chat
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Chat
                        messageArray={messageArray}
                        setNewMessage={setNewMessage}
                        handleNewMessage={handleNewMessage}
                        newMessage={newMessage}
                    />
                </AccordionDetails>
            </Accordion>
            
        </Grid>
    );
};
GreenRoom.propTypes = {
    handleNewMessage: PropTypes.func.isRequired,
    newMessage: PropTypes.string.isRequired,
    roomInfo: PropTypes.object.isRequired,
    messageArray: PropTypes.array.isRequired,
    setNewMessage: PropTypes.func.isRequired,
    queue: PropTypes.array.isRequired,
    handleAddToQueue: PropTypes.func.isRequired,
    // handleDropdownChange: PropTypes.func.isRequired,
    // songbook: PropTypes.array.isRequired,
    // query: PropTypes.string.isRequired,
    // handleQueryChange: PropTypes.func.isRequired,
    // handleSubmit: PropTypes.func.isRequired
};

export default GreenRoom;
