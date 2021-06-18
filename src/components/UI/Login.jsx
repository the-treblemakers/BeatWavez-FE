import React from 'react';
import {
    Grid,
    Typography,
    Paper
} from '@material-ui/core';
import LoginForm from '../UI/LoginForm';
import PropTypes from 'prop-types';
import InstructionAccordion from '../UI/InstructionAccordion';
import { useStyles } from '../Styles/homeStyles';

function Login({ handleJoinRoom, handleCreateRoom, roomsArray }) {
    const classes = useStyles();

    return (
        <Grid
            container
            justify="center"
            alignItems="center"
            direction="column"
            style={{ minHeight: '100vh' }}
            spacing={5}
        >
            <Grid item style={{ marginTop: "2rem" }}>
                <Grid container 
                    direction="column" 
                    alignItems="center" 
                    justify="center"
                    style={{ position: "relative" }}
                    >
                    <img src={"public/assets/beach128.png"} alt="beach wavez logo" className={classes.logo}/>
                    <Paper className={classes.logoContainer}/>
                </Grid>
                <Typography variant="h1" color="secondary" className={classes.logoFont}>
                        beatWavez
                </Typography>
            </Grid>

            <Grid item>
                <LoginForm
                    handleJoinRoom={handleJoinRoom}
                    handleCreateRoom={handleCreateRoom}
                    roomsArray={roomsArray}
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
    roomsArray: PropTypes.array.isRequired,
};

export default Login;
