/* eslint-disable max-len */
import React, { useState } from 'react';
import PropTypes from "prop-types";
import { TextField, Button, Grid } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

const LoginForm = ({ handleCreateRoom, handleJoinRoom }) => {
    const [stageName, setStageName] = useState('');
    const [roomName, setRoomName] = useState('');
    const history = useHistory();

    const handleStageNameChange = (e) => {
        setStageName(e.target.value);
    };

    const handleRoomNameChange = (e) => {
        setRoomName(e.target.value);
    };

    return (
        <>
            <Grid container direction="column" alignItems="center" justify="center">
                <TextField
                    variant="outlined"
                    label="Stage Name"
                    fullWidth
                    style={{ marginBottom: '1em' }}
                    onChange={handleStageNameChange}
                    value={stageName}
                />

                <TextField
                    variant="outlined"
                    label="Room Name"
                    fullWidth
                    style={{ marginBottom: '1em' }}
                    onChange={handleRoomNameChange}
                    value={roomName}
                />

                <Button
                    name='join'
                    size="large"
                    variant="contained"
                    color="primary"
                    style={{ marginBottom: '1em' }}
                    disabled={roomName === '' || stageName === ''}
                    onClick={() => {
                        handleJoinRoom(stageName, roomName);
                        history.push('/greenroom');
                    }}
                >
                    JOIN THE PARTY!
                </Button>

                <Button
                    name='create'
                    size="large"
                    variant="contained"
                    color="primary"
                    disabled={roomName !== '' || stageName === ''}
                    onClick={() => {
                        handleCreateRoom(stageName);
                        history.push('/greenroom');
                    }}
                >
                    CREATE NEW ROOM
                </Button>
            </Grid>

        </>
    );
};

LoginForm.propTypes = {
    handleCreateRoom: PropTypes.func.isRequired,
    handleJoinRoom: PropTypes.func.isRequired,
};

export default LoginForm;
