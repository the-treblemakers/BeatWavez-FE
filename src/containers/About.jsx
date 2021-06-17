import React, { useState } from 'react';
import clsx from 'clsx';
import { Grid, Typography, IconButton, Card, CardHeader, CardMedia, CardContent, CardActions, Collapse  } from '@material-ui/core';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import BRANDON from '../../public/assets/BRANDON.png';
import KB from '../../public/assets/KB.png';
import NICOLE from '../../public/assets/NICOLE.png';
import LORI from '../../public/assets/LORI.png';
import SORAYA from '../../public/assets/SORAYA.png';
import { useStyles } from '../components/styles/aboutStyles';
import AboutList from '../components/About/AboutList';

const About = () => {

    return (
        
        <Grid container
            direction="column"
            alignItems="center"
            justify="center"
            spacing={2}>

            <Typography
                variant="h2" align="center" style={{ margin: "1rem" }}>Meet the KJs</Typography>

            <AboutList />
        </Grid>
    );
};

export default About;
