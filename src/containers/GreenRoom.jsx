import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Accordion, AccordionSummary, AccordionDetails, Typography, Grid } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import SearchBar from '../components/Search/SearchBar';
import SearchFilters from '../components/Search/SearchFilters';
import Songbook from '../components/SongBook/Songbook';
import Queue from '../components/Queue/Queue';
import Chat from '../components/Chat/Chat';
import SnackboxAlert from '../components/UI/SnackboxAlert';
import { getAllSongs } from '../services/apiUtils';
import Spinner from '../components/UI/Spinner';
import { useStyles } from '../components/Styles/greenroomStyles';
import { useHistory } from 'react-router-dom';

const GreenRoom = ({ handleNewMessage, roomInfo, newMessage, messageArray, setNewMessage, queue, handleAddToQueue }) => {
    const [query, setQuery] = useState('');
    const [songbook, setSongbook] = useState([]);
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const [currentSongs, setCurrentSongs] = useState([]);
    const [channelFilter, setChannelFilter] = useState('');
    const [filteredSongs, setFilteredSongs] = useState([]);

    const history = useHistory();
    const classes = useStyles();

    useEffect(() => {
        if (roomInfo.stageName === '' || roomInfo.roomName === '') {
            return <>{history.push('/')}</>;
        } else {
            getAllSongs()
                .then((songbook) => {
                    setSongbook(songbook);
                    setFilteredSongs(songbook);
                    // setCurrentSongs(songbook.slice(0, 20));
                })
                .finally(() => setLoading(false));
        }
    }, []);

    console.log('>>>', roomInfo.passcode, '<<< ROOM PASSCODE');  // FOR DEMO: DELETE AND UNCOMMENT LINE 100 AFTER

    useEffect(() => {
        const filterMethod = songbook.filter((song) => {
            const channelName = song.channelName;
            return channelName.includes(channelFilter);
        });
        setFilteredSongs(filterMethod);
    }, [channelFilter]);

    useEffect(() => {
        setCurrentSongs(filteredSongs.slice(0, 20));
    }, [filteredSongs]);

    function handleQueryChange(e) {
        setQuery(e.target.value);
    }

    function handleDropdownChange(e) {
        setChannelFilter(e.target.value);
        setQuery('');
    }

    function handleSubmit(e) {
        e.preventDefault();

        setLoading(true);

        const search = () => {
            if (query === '') return filteredSongs;
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
            justify="flex-end"
            alignItems="center"
            direction="column"
            style={{ minHeight: '90vh' }}>
                <Typography
                    variant="h2"
                    align="center"
                    style={{ marginTop: '1.5rem' }}
                    color="secondary">
                    Welcome to the {roomInfo.roomName} room!
                </Typography>
                <Typography
                    variant="h3"
                    align="center"
                    style={{ margin: '0.5rem' }}>
                    passcode: {roomInfo.passcode}
                </Typography>

            {/* <SnackboxAlert roomInfo={roomInfo} /> */}

            <Accordion
                className={classes.accordion}
                defaultExpanded>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                >
                    <Typography variant="h3">
                        Songbook
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Grid container
                        direction="column"
                        alignItems="center"
                        justify="center">
                        <Grid container
                            direction="row"
                            alignItems="center"
                            justify="center"
                            spacing={1}>
                            <Grid item xs={4}>
                                <SearchFilters
                                    channelFilter={channelFilter}
                                    handleDropdownChange={handleDropdownChange}
                                />
                            </Grid>
                            <Grid item xs={8}>
                                <SearchBar
                                    query={query}
                                    setQuery={setQuery}
                                    handleQueryChange={handleQueryChange}
                                    handleSubmit={handleSubmit}
                                />
                            </Grid>
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

            <Accordion
                className={classes.root}>
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

            <Accordion
                className={classes.root}>
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
};

export default GreenRoom;
