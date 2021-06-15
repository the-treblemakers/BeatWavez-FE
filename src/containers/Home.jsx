import React from 'react';
import Login from '../components/UI/Login';
import PropTypes from 'prop-types';

function Home({ handleJoinRoom, handleCreateRoom }) {
    return (
        <>
            <Login
                handleJoinRoom={handleJoinRoom}
                handleCreateRoom={handleCreateRoom}
            />
        </>
    );
}

Home.propTypes = {
    handleJoinRoom: PropTypes.func.isRequired,
    handleCreateRoom: PropTypes.func.isRequired,
};

export default Home;
