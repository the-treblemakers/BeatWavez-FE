import React, { useState, useEffect } from 'react';
import Login from '../components/UI/Login';
import PropTypes from 'prop-types';
import { useMediaQuery, Grid, useTheme } from '@material-ui/core';
import { useStyles } from '../components/Styles/homeStyles'

function Home({ handleJoinRoom, handleCreateRoom, roomsArray, handleUpdateRoomsArray, roomInfo, setRoomInfo }) {
    // const [size, setSize] = useState('xsmall');
    const classes = useStyles();

    // const xsmall = useMediaQuery('(min-width:0px)');
    // const small = useMediaQuery('(min-width:600px)');
    // const medium = useMediaQuery('(min-width:960px)');
    // const large = useMediaQuery('(min-width:1280px)');

    // useEffect(() => {
    //     xsmall ? setSize('xsmall')
    //     : small? setSize('small')
    //     : medium ? setSize('medium')
    //     : large ? setSize('large')
    //     : setSize('xlarge')
    // }, [size])

    return (
        <Grid container >
        <Grid item container 
            className={classes.root}
            // styles={
            // large ? { width: "20%", background: "#000000" }
            // : { width: "100%" }}
            // styles={{ maxWidth: "20%" }}

        >
        <Login
            handleJoinRoom={handleJoinRoom}
            handleCreateRoom={handleCreateRoom}
            roomsArray={roomsArray}
            handleUpdateRoomsArray={handleUpdateRoomsArray}
            roomInfo={roomInfo}
            setRoomInfo={setRoomInfo}
        />
        </Grid>
        </Grid>
    );
}


Home.propTypes = {
    handleJoinRoom: PropTypes.func.isRequired,
    handleCreateRoom: PropTypes.func.isRequired,
    roomsArray: PropTypes.array.isRequired,
    handleUpdateRoomsArray: PropTypes.func.isRequired,
    roomInfo: PropTypes.object.isRequired,
    setRoomInfo: PropTypes.func.isRequired,
};

export default Home;
