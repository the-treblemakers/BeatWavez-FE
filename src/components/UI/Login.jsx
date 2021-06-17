import React from 'react';
import {
    Grid,
    Typography
} from '@material-ui/core';
import LoginForm from '../UI/LoginForm';
import PropTypes from 'prop-types';
import InstructionAccordion from '../UI/InstructionAccordion';

function Login({ handleJoinRoom, handleCreateRoom }) {
    return (
        <Grid
            container
            justify="center"
            alignItems="center"
            direction="column"
            style={{ minHeight: '100vh' }}
            spacing={5}
        >
            <Grid item>
                <Typography variant="h2" color="secondary">
                        Welcome To BeatWavez!
                </Typography>
            </Grid>

            <Grid item>
                <LoginForm
                    handleJoinRoom={handleJoinRoom}
                    handleCreateRoom={handleCreateRoom}
                />
            </Grid>

            <Grid item>
                <InstructionAccordion />
            </Grid>
        </Grid>
    );
}

Login.propTypes = {
    handleJoinRoom: PropTypes.func.isRequired,
    handleCreateRoom: PropTypes.func.isRequired,
};

export default Login;
