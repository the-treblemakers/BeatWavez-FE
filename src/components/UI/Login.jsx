import React from 'react';
import {
    Grid,
    Typography,
    createMuiTheme,
    ThemeProvider,
} from '@material-ui/core';
import LoginForm from '../UI/LoginForm';
import PropTypes from 'prop-types';
import InstructionAccordion from '../UI/InstructionAccordion';

const theme = createMuiTheme({
    typography: {
        fontFamily: ['Gugi', 'cursive'].join(','),
    },
});

function Login({ handleJoinRoom, handleCreateRoom }) {
    return (
        <ThemeProvider theme={theme}>
            <Grid
                container
                justify="center"
                alignItems="center"
                direction="column"
                style={{ minHeight: '100vh' }}
                spacing={5}
            >
                <Grid item>
                    <Typography variant="h4" color="primary">
                        Welcome To BeatWavez!
                    </Typography>
                </Grid>

                <Grid item style={{ border: '1px solid #000' }}>
                    <LoginForm
                        handleJoinRoom={handleJoinRoom}
                        handleCreateRoom={handleCreateRoom}
                    />
                </Grid>

                <Grid item>
                    <InstructionAccordion />
                </Grid>
            </Grid>
        </ThemeProvider>
    );
}

Login.propTypes = {
    handleJoinRoom: PropTypes.func.isRequired,
    handleCreateRoom: PropTypes.func.isRequired,
};

export default Login;
