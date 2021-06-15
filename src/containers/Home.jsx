import React from 'react';
import Login from '../components/UI/Login';
import PropTypes from 'prop-types';

function Home({ handleJoinRoom, handleCreateRoom, history }) {
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
    history: PropTypes.object.isRequired,
};

export default Home;
