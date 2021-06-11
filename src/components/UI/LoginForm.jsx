/* eslint-disable max-len */
import React, { useState } from 'react';
import { TextField, Button, Grid } from '@material-ui/core';



const LoginForm = () => {
    const [stageName, setStageName] = useState('');
    const [roomName, setRoomName] = useState('');
    // const [newRoomCode, setNewRoomCode] = useState('');

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
                    size="large"
                    variant="contained"
                    color="primary"
                    style={{ marginBottom: '1em' }}
                    disabled={!stageName || !roomName}
                    
                >
          JOIN THE PARTY!
                </Button>

                <Button
                    size="large"
                    variant="contained"
                    color="primary"
                    disabled={!stageName || roomName}
                    // value={newRoomCode}
                    // onClick={}
                >
          GET NEW ROOM CODE
                </Button>
                {/* <p>Here is your room code: {newRoomCode}</p> */}
                {/* add room code pop up when click on GET NEW ROOM CODE */}
            </Grid>
            
        </>
    );
};

export default LoginForm;
