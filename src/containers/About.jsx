import React, { useState } from 'react';
import clsx from 'clsx';
import { Grid, Typography, IconButton, Card, CardHeader, CardMedia, CardContent, CardActions, Collapse, makeStyles  } from '@material-ui/core';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import BRANDON from '../../public/assets/BRANDON.png';
import KB from '../../public/assets/KB.png';
import NICOLE from '../../public/assets/NICOLE.png';
import LORI from '../../public/assets/LORI.png';
import SORAYA from '../../public/assets/SORAYA.png';

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 0,
        paddingTop: '100%', // 16:9
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
}));
  

const About = () => {
    const classes = useStyles();
    const [expanded, setExpanded] = useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        
        <Grid container
            direction="column"
            alignItems="center"
            spacing={2}>
            <Typography
                variant="h2" align="center">Meet the KJs</Typography>
            <Grid item>
                <Card>
                    <Typography variant="h3" align="center">Katy Boyles</Typography>
                    <CardMedia
                        className={classes.media} 
                        image={KB} 
                        title="kb"/>
                    <CardActions>
                        <Grid container
                            direction="row"
                            justify="space-between"
                            alignItems="center">
                            <IconButton
                                target="_blank"
                                href='https://www.linkedin.com/in/katy-boyles/'>
                                <LinkedInIcon />
                            </IconButton>
                            <IconButton
                                target="_blank"
                                href='https://github.com/katrinkajb'>
                                <GitHubIcon />
                            </IconButton>
                            <IconButton
                                target="_blank"
                                href='https://twitter.com/KBtrizay'>
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
            </Grid>
            <Grid item>
                <Card>
                    <Typography variant="h3" align="center">NICOLE</Typography>
                    <CardMedia
                        className={classes.media} 
                        image={NICOLE} 
                        title="nicole"/>
                    <CardActions>
                        <Grid container
                            direction="row"
                            justify="space-between"
                            alignItems="center">
                            <IconButton
                                target="_blank"
                                href='https://www.linkedin.com/in/nicolemartinpdx/'>
                                <LinkedInIcon />
                            </IconButton>
                            <IconButton
                                target="_blank"
                                href='https://github.com/nicole-m-martin'>
                                <GitHubIcon />
                            </IconButton>
                            <IconButton 
                                target="_blank"
                                href='https://twitter.com/nmartinpdx'>
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
                        <Typography
                            variant="body1">
                            Hi I’m Nicole! I am a full stack software engineer located in Portland, OR. I enjoy working with computers and collaborating on fun and impactful projects that will help the planet, animals, and all humans. Also a huge fan of vegan food, coffee and being outside in the beautiful Pacific Northwest with my dog, Cooper. My favorite karaoke songs to sing are Cherry Bomb by The Runaways and Sunday Morning by No Doubt.
                        </Typography>
                    </Collapse>
                </Card>
            </Grid>
            <Grid item>
                <Card>
                    <Typography variant="h3" align="center">BRANDON</Typography>
                    <CardMedia
                        className={classes.media} 
                        image={BRANDON} 
                        title="brandon"/>  
                    <CardActions>
                        <Grid container
                            direction="row"
                            justify="space-between"
                            alignItems="center">
                            <IconButton 
                                target="_blank"
                                href='https://www.linkedin.com/in/brandonperard/'>
                                <LinkedInIcon />
                            </IconButton>
                            <IconButton 
                                target="_blank"
                                href='https://github.com/bperard'>
                                <GitHubIcon />
                            </IconButton>
                            <IconButton 
                                target="_blank"
                                href='https://twitter.com/SayYesToExcess'>
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
                        <Typography
                            variant="body1">
                            Hello, my name's Brandon, and I'm a full stack software engineer in Portland, OR. I enjoy applying my curiosity to figuring out how things work, and then using that knowledge to create something awesome for the people & communities I love. I probably don't dance or sing very well, but I commit to the performance. My first karaoke song was Careless Whisper; Tribute, Gin & Juice, and Rebel Yell are my go-to's.
                        </Typography>
                    </Collapse>
                </Card>
            </Grid>
            <Grid item>
                <Card>
                    <Typography variant="h3" align="center">SORAYA</Typography>
                    <CardMedia
                        className={classes.media} 
                        image={SORAYA} 
                        title="soraya"/> 
                    <CardActions>
                        <Grid container
                            direction="row"
                            justify="space-between"
                            alignItems="center">
                            <IconButton 
                                target="_blank"
                                href='https://www.linkedin.com/in/soraya-benson/'>
                                <LinkedInIcon />
                            </IconButton>
                            <IconButton 
                                target="_blank"
                                href='https://github.com/sorayabenson'>
                                <GitHubIcon />
                            </IconButton>
                            <IconButton 
                                target="_blank"
                                href='https://twitter.com/sorayamajd'>
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
                        <Typography
                            variant="body1">
                            Oh hi, I’m Soraya, a full-stack engineer in Portland, OR. I adore interactive storytelling, accessible design, and creating things with rad people. My go to karaoke song is ‘The One That I Want’ from Grease ⚡.
                        </Typography>
                    </Collapse>
                </Card>
            </Grid>
            <Grid item>
                <Card>
                    <Typography variant="h3" align="center">LORI</Typography>
                    <CardMedia
                        className={classes.media} 
                        image={LORI} 
                        title="lori"/>
                        
                    <CardActions>
                        <Grid container
                            direction="row"
                            justify="space-between"
                            alignItems="center">
                            <IconButton 
                                target="_blank"
                                href='https://www.linkedin.com/in/loriwinston/'>
                                <LinkedInIcon />
                            </IconButton>
                            <IconButton 
                                target="_blank"
                                href='https://github.com/LoriWinston'>
                                <GitHubIcon />
                            </IconButton>
                            <IconButton 
                                target="_blank"
                                href='https://twitter.com/LoriWinston8'>
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
                        <Typography
                            variant="body1">
                        Lori is a software engineer who loves hiking, cooking, and petting dogs. 
                        She has a soft spot for Electric Light Orchestra at karaoke despite Jeff
                        Lynne's angelic voice being far out of her vocal range. 
                        </Typography>
                    </Collapse>
                </Card>
            </Grid>
        </Grid>
    );
};

export default About;
