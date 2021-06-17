/* eslint-disable max-len */
import React, { useState } from 'react';
import PropTypes from "prop-types";
import { TextField, Button, Grid, MenuItem, ButtonGroup } from '@material-ui/core';
import Typography from "@material-ui/core/Typography";
import { useHistory } from 'react-router-dom';

const LoginForm = ({ handleCreateRoom, handleJoinRoom }) => {
    const [stageName, setStageName] = useState('');
    const [roomName, setRoomName] = useState('');
    const [showHost, setShowHost] = useState(false);
    const [showGuest, setShowGuest] = useState(false);
    const history = useHistory();

    const handleStageNameChange = (e) => {
        setStageName(e.target.value);
    };

    const handleRoomNameChange = (e) => {
        setRoomName(e.target.value);
    };

    const handleHostButtonChange = () => {
        setShowHost(true);
    };

    const handleGuestButtonChange = () => {
        setShowHost(false);
    };

    

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
                        disabled={showHost === true}
                        onClick={() => {
                            handleCreateRoom(stageName);
                            history.push('/greenroom');
                        }}
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
                    // onChange={handleDropdownChange} >
                    >
                        <MenuItem value="">Rooms Populate here</MenuItem>
                    </TextField>
                  
            

                    <TextField
                        variant="outlined"
                        label="Join Room With Passcode"
                        type="password"
                        fullWidth
                        style={{ marginBottom: '1em' }}
                        // onChange={handlePasscodeChange}
                        value={''}
                    />

                    <Button
                        name='join'
                        size="large"
                        variant="contained"
                        color="primary"
                        disabled={roomName === '' || stageName === ''}
                        onClick={() => {
                            handleJoinRoom(stageName, roomName);
                            history.push('/greenroom');
                        }}
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
};

export default LoginForm;
