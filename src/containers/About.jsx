import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import AboutList from '../components/About/AboutList';

const About = () => {

    return (
        <Grid container
            direction="column"
            alignItems="center"
            justify="center"
            spacing={1}>

            <Typography
                variant="h2" align="center" style={{ margin: "1.5rem" }}>Meet the KJs</Typography>

            <AboutList />
        </Grid>
    );
};

export default About;
