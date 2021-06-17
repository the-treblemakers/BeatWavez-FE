import React, { useState } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { Grid, Typography, IconButton, Card, CardHeader, CardMedia, CardContent, CardActions, Collapse  } from '@material-ui/core';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { useStyles } from '../styles/aboutStyles';

const AboutItem = ({ name, image, linkedIn, github, twitter, bio}) => {
    const classes = useStyles();
    const [expanded, setExpanded] = useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <Card variant="outlined">
            <Typography variant="h3" align="center" style={{ margin: '0.5rem' }}>{name}</Typography>
            <CardMedia
                className={classes.media} 
                image={image} 
                title={name}/>
            <CardActions>
                <Grid container
                    direction="row"
                    justify="space-between"
                    alignItems="center">
                    <IconButton
                        target="_blank"
                        href={linkedIn}>
                        <LinkedInIcon />
                    </IconButton>
                    <IconButton
                        target="_blank"
                        href={github}>
                        <GitHubIcon />
                    </IconButton>
                    <IconButton
                        target="_blank"
                        href={twitter}>
                        <TwitterIcon />
                    </IconButton>
                    <IconButton
                        className={clsx(classes.expand, {
                            [classes.expandOpen]: expanded,
                        })}
                        onClick={handleExpandClick}
                        aria-expanded={expanded}
                        aria-label="show more"
                    >
                        <ExpandMoreIcon />
                    </IconButton>
                </Grid>
            </CardActions>
            <Collapse 
                in={expanded} 
                timeout="auto" 
                unmountOnExit>
                <CardContent>
                    <Typography
                        variant="body1">
                        {bio}
                    </Typography>
                </CardContent>
            </Collapse>
        </Card>
    )
}

AboutItem.propTypes = {
    name: PropTypes.string.isRequired, 
    image: PropTypes.string.isRequired, 
    linkedIn: PropTypes.string.isRequired, 
    github: PropTypes.string.isRequired, 
    twitter: PropTypes.string.isRequired, 
    bio: PropTypes.string.isRequired
}

export default AboutItem
