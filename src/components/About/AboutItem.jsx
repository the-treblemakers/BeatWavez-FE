import React from 'react';
import PropTypes from 'prop-types';
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
import SORAYA from '../../public/assets/SORAYA.png'

const AboutItem = ({ name, image, linkedIn, github, twitter, }) => {
    return (
        <Card>
            <Typography variant="h3" align="center">{name}</Typography>
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
                        My name is KB and I'm a full stack software engineer in Portland, OR. I like travelling, dancing, video games, and reading. The first karaoke song I sang was "It's Oh So Quiet" by Bjork.
                    </Typography>
                </CardContent>
            </Collapse>
        </Card>
    )
}

AboutItem.propTypes = {

}

export default AboutItem
