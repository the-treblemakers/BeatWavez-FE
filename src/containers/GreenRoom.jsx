import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
<<<<<<< HEAD
import { Accordion, AccordionSummary, AccordionDetails, Typography, Grid } from '@material-ui/core';
=======
import { Accordion, AccordionSummary, AccordionDetails, Typography, Grid, Snackbar, IconButton } from '@material-ui/core';
import CloseSharpIcon from '@material-ui/icons/CloseSharp';
>>>>>>> a51710c9985d35b170b29d17cef2ff3878050dde
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import SearchBar from '../components/Search/SearchBar';
import SearchFilters from '../components/Search/SearchFilters';
import Songbook from '../components/SongBook/Songbook';
import Queue from '../components/Queue/Queue';
import Chat from '../components/Chat/Chat';
import { getAllSongs } from '../services/apiUtils';
import Spinner from '../components/UI/Spinner';
import { useStyles } from '../components/styles/greenroomStyles';

const GreenRoom = ({ handleNewMessage, roomInfo, newMessage, messageArray, setNewMessage, queue }) => {
    const [query, setQuery] = useState('');
    const [songbook, setSongbook] = useState([]);
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const [currentSongs, setCurrentSongs] = useState([]);
    const [channelFilter, setChannelFilter] = useState('');
    const [filteredSongs, setFilteredSongs] = useState([]);
    const [open, setOpen] = useState(true);

    const classes = useStyles();

    useEffect(() => {
        getAllSongs()
            .then((songbook) => {
                setSongbook(songbook);
                setFilteredSongs(songbook);
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
            return filteredSongs;
        };
        const filteredResults = filter();
        return filteredResults;
    }, [channelFilter]);

    useEffect(() => {
        setCurrentSongs(filteredSongs);

    }, [filteredSongs]);

    function handleQueryChange(e) {
        setQuery(e.target.value);
    }        
      
    function handleDropdownChange(e){
        setChannelFilter(e.target.value);
        setQuery('');
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
        setTimeout(() => {setCurrentSongs(searchResults);
            setLoading(false);
        }, 100);

    }

    function handleClose() {
        setOpen(false);
    }

    return (
        <Grid container
            justify="space-between"
            alignItems="center"
            direction="column"
            style={{ minHeight: '90vh' }}>
            {roomInfo.roomName ?
                <Typography
                    variant="h2"
                    align="center"
                    style={{ margin: '1.5rem' }}>
                    Welcome to the {roomInfo.roomName} room!
                </Typography>
                :
                <Typography
                    variant="h2"
                    align="center"
                    style={{ margin: '1.5rem' }}>
                    Welcome to the Greenroom!
                </Typography>
            }

            <Snackbar
                open={open}
                className={classes.snackbar}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                }}
                message={
                    <>
                        <Typography
                            variant="body1"
                            color="secondary"
                            style={{ margin: "0.7rem" }}>
                            Hey {roomInfo.stageName}!
                        </Typography>
                        <Typography
                            variant="body2"
                            style={{ margin: "0.7rem" }}>
                            To find your song, you can flip through songbook or search your heart out and press + to add it to the queue.
                        </Typography>
                        <Typography
                            style={{ margin: "0.7rem" }}
                            variant="body2">
                            Hangout here and chat with your party while the host plays the karaoke queue on a shared screen.
                        </Typography>
                        <Typography
                            style={{ margin: "0.7rem" }}
                            variant="body2">
                            If you're the host, head over to the partyroom to share the karaoke magic with everyone!
                        </Typography>
                    </>
                }
                autoHideDuration={15000}
                onClose={handleClose}
                action={
                    <IconButton onClick={handleClose}>
                        <CloseSharpIcon color="primary" />
                    </IconButton>
                } />

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
                            justify="space-between"
                            spacing={1}>
                            <Grid item xs={4}>
                                <SearchFilters
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
                className={classes.accordion}>
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
                className={classes.accordion}>
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
    // handleAddToQueue: PropTypes.func.isRequired,
};

export default GreenRoom;
