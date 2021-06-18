import React from 'react';
import Login from '../components/UI/Login';
import PropTypes from 'prop-types';
import { ThemeProvider } from '@material-ui/core';
import theme  from '../components/styles/theme';

function Home({ handleJoinRoom, handleCreateRoom }) {
    return (
<<<<<<< HEAD
        <ThemeProvider theme={theme}>
=======
>>>>>>> a51710c9985d35b170b29d17cef2ff3878050dde
            <Login
                handleJoinRoom={handleJoinRoom}
                handleCreateRoom={handleCreateRoom}
            />
<<<<<<< HEAD
        </ThemeProvider >
=======
>>>>>>> a51710c9985d35b170b29d17cef2ff3878050dde
    );
}

Home.propTypes = {
    handleJoinRoom: PropTypes.func.isRequired,
    handleCreateRoom: PropTypes.func.isRequired,
};

export default Home;
