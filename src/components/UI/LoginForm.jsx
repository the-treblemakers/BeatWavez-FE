/* eslint-disable max-len */
import React, { useState } from 'react';
import PropTypes from "prop-types";
import { TextField, Button, Grid, MenuItem, ButtonGroup } from '@material-ui/core';

const LoginForm = ({ handleCreateRoom, handleJoinRoom, roomsArray }) => {
    const [stageName, setStageName] = useState('');
    const [roomName, setRoomName] = useState('');
    const [inputPasscode, setInputPasscode] = useState('');
    const [showHost, setShowHost] = useState(false);

    const handleStageNameChange = (e) => {
        setStageName(e.target.value);
    };

    const handleHostButtonChange = () => {
        setShowHost(true);
    };

    const handleGuestButtonChange = () => {
        setShowHost(false);
    };

    // const handleRoomNameChange = (e) => {
    //     setRoomName(e.target.value);
    // };

    return (
        <>
            <ButtonGroup
                size="large"
                color="primary"
            >
                <Button
                    onClick={handleHostButtonChange}>
                    Host
                </Button>

                <Button
                    onClick={handleGuestButtonChange}>
                    Guest
                </Button>
            </ButtonGroup>
            <Grid container direction="column" alignItems="center" justify="center">


                {showHost ? <>
                    <TextField
                        variant="outlined"
                        label="Enter Stage Name"
                        fullWidth
                        style={{ marginBottom: '2em' }}
                        onChange={handleStageNameChange}
                        value={stageName}
                    />


                    <Button
                        name='create'
                        size="large"
                        variant="contained"
                        color="primary"
                        style={{ marginBottom: '2em' }}
                        disabled={showHost === false || stageName === ''}
                        onClick={() => handleCreateRoom({ stageName })}
                    >
                        CREATE NEW ROOM!
                    </Button>
                </> : <>


                    <TextField
                        variant="outlined"
                        label="Enter Stage Name"
                        fullWidth
                        style={{ marginBottom: '2em' }}
                        onChange={handleStageNameChange}
                        value={stageName}
                    />

                    <TextField
                        select
                        fullWidth
                        margin="dense"
                        style={{ paddingBottom: "1em" }}
                        label="Party Rooms In Session"
                        onChange={({ target }) => setRoomName(target.value)}
                    >
                        {roomsArray.map((room) => (
                            <MenuItem key={room} value={room}>{room}</MenuItem>
                        ))}
                    </TextField>



                    <TextField
                        variant="outlined"
                        label="Join Room With Passcode"
                        type="password"
                        fullWidth
                        style={{ marginBottom: '1em' }}
                        onChange={({ target }) => setInputPasscode(target.value)}
                        value={inputPasscode}
                    />

                    <Button
                        name='join'
                        size="large"
                        variant="contained"
                        color="primary"
                        disabled={roomName === '' || stageName === '' || inputPasscode === ''}
                        onClick={() => handleJoinRoom({ stageName, inputPasscode, roomName })}
                    >
                        JOIN THE PARTY!
                    </Button>
                </>
                }




            </Grid>

        </>
    );
};

LoginForm.propTypes = {
    handleCreateRoom: PropTypes.func.isRequired,
    handleJoinRoom: PropTypes.func.isRequired,
    roomsArray: PropTypes.array.isRequired,
};

export default LoginForm;
