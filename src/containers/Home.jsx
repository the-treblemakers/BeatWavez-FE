import React from 'react';
import Login from '../components/UI/Login';
import PropTypes from 'prop-types';
import { ThemeProvider } from '@material-ui/core';
import { theme } from '../components/styles/theme';

function Home({ handleJoinRoom, handleCreateRoom }) {
    return (
        <ThemeProvider theme={theme}>
            <Login
                handleJoinRoom={handleJoinRoom}
                handleCreateRoom={handleCreateRoom}
            />
        </ThemeProvider >
    );
}

Home.propTypes = {
    handleJoinRoom: PropTypes.func.isRequired,
    handleCreateRoom: PropTypes.func.isRequired,
};

export default Home;
