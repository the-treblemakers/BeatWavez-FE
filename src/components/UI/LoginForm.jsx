import React from 'react';
import { TextField, Button, Grid } from '@material-ui/core';

const LoginForm = () => {
  return (
    <Grid container direction="column" alignItems="center" justify="center">
      <TextField
        variant="outlined"
        label="Stage Name"
        fullWidth
        style={{ marginBottom: '1em' }}
      />

      <TextField
        variant="outlined"
        label="Room Name"
        fullWidth
        style={{ marginBottom: '1em' }}
      />

      <Button
        size="large"
        variant="contained"
        color="primary"
        style={{ marginBottom: '2em' }}
      >
        JOIN PARTY!
      </Button>

      <Button size="large" variant="contained" color="primary">
        GET NEW ROOM
      </Button>
    </Grid>
  );
};

export default LoginForm;
