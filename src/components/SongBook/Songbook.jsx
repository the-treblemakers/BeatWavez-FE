import React, { useEffect } from 'react';
import SongbookItem from './SongbookItem';
import Spinner from '../UI/Spinner';
import PropTypes from 'prop-types';
import { List, ListItem, IconButton, Grid, Card } from '@material-ui/core';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import AddIcon from '@material-ui/icons/Add';

const Songbook = ({ stageName, loading, currentPage, setCurrentPage, currentSongs, setCurrentSongs, songbook }) => {
    useEffect(() => {

    }, [loading]);

    const handlePageChange = () => {
        setCurrentPage(currentPage + 1);
        const sliceMathStart = currentPage * 20;
        const sliceMathEnd = sliceMathStart + 20;
        const newPage = songbook.slice(sliceMathStart, sliceMathEnd);

        setCurrentSongs(newPage);
    };

    if(loading) return <Spinner />;

    return (
        <Grid container
            direction="column"
            alignItems="center">

            <Grid container
                direction="row"
                alignItems="center"
                justify="space-between">
                <IconButton onClick={handlePageChange}>
                    <NavigateBeforeIcon />
                </IconButton>
                <IconButton onClick={handlePageChange}>
                    <NavigateNextIcon />
                </IconButton>
            </Grid>

            <List style={{ maxHeight: 350, overflow: 'auto' }} aria-label='songs'>
                {currentSongs.map((song, i) => (
                    <ListItem key={song.title + i}>

                        <Card variant="outlined" style={{ border: "#FD2C7B 3px solid", borderRadius: "1px", boxShadow: "#FD2C7B 0px 0px 8px" }}>
                            <Grid container
                                direction="row"
                                alignItems="center">
                                <Grid item xs={10}>
                                    <SongbookItem {...song} />
                                </Grid>
                                <Grid item xs={2}>
                                    <IconButton
                                        onClick={() => handleAddToQueue(song)}>
                                        <AddIcon />
                                    </IconButton>
                                </Grid>
                                {/* <button>Flag as a bad video</button> */}
                            </Grid>
                        </Card>

                    </ListItem>
                ))}
            </List>
        </Grid>
    );
};

Songbook.propTypes = {
    // handleAddToQueue: PropTypes.func.isRequired,
    stageName: PropTypes.string.isRequired,
    loading: PropTypes.bool.isRequired,
    currentPage: PropTypes.number.isRequired,
    setCurrentPage: PropTypes.func.isRequired,
    currentSongs: PropTypes.array.isRequired,
    setCurrentSongs: PropTypes.func.isRequired,
    songbook: PropTypes.array.isRequired
};

export default Songbook;
