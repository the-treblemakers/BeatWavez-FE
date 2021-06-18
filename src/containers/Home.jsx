import React from 'react';
import Login from '../components/UI/Login';
import PropTypes from 'prop-types';

function Home({ handleJoinRoom, handleCreateRoom, roomsArray, handleUpdateRoomsArray }) {
    return (
        <Login
            handleJoinRoom={handleJoinRoom}
            handleCreateRoom={handleCreateRoom}
            roomsArray={roomsArray}
            handleUpdateRoomsArray={handleUpdateRoomsArray}
        />
    );
}


Home.propTypes = {
    handleJoinRoom: PropTypes.func.isRequired,
    handleCreateRoom: PropTypes.func.isRequired,
    roomsArray: PropTypes.array.isRequired,
    handleUpdateRoomsArray: PropTypes.func.isRequired,
};

export default Home;
