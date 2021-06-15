import React from 'react';
import { Container, Grid } from '@material-ui/core';
import discoSpinner from '../../../public/assets/discoSpinner.gif';

const Spinner = () => (
    <Container 
        maxWidth="sm">
            <Grid 
                container
                direction="row" 
                justify="center" 
                alignItems="center">
                <img src={discoSpinner} alt="loading" aria-label='disco spinner' style={{ width: "50%", height: "auto" }}/>
            </Grid>
    </Container>
)


export default Spinner;
