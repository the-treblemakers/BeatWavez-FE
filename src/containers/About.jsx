import React from 'react';
import { Grid, Typography, IconButton } from '@material-ui/core';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';
import { Link } from 'react-router-dom';
import BRANDON from '../../public/assets/BRANDON.jpg';
import KB from '../../public/assets/KB.jpg';

const About = () => {
    return (
        
        <Grid container>
            <Typography
                variant="h2">Meet the KJs</Typography>
            <Grid item>
                <Typography variant="h3">KB</Typography>
                <img src={KB} alt="kb"/>
                <Typography
                    variant="body1">
                    My name is KB and I'm a full stack software engineer in Portland, OR. I like travelling, dancing, video games, and reading. The first karaoke song I sang was "It's Oh So Quiet" by Bjork.
                </Typography>
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
                </Grid>
            </Grid>
            <Grid item>
                <Typography variant="h3">NICOLE</Typography>
                <img src=""/>
                <Typography
                    variant="body1">
                    Hi I’m Nicole! I am a full stack software engineer located in Portland, OR. I enjoy working with computers and collaborating on fun and impactful projects that will help the planet, animals, and all humans. Also a huge fan of vegan food, coffee and being outside in the beautiful Pacific Northwest with my dog, Cooper. My favorite karaoke songs to sing are Cherry Bomb by The Runaways and Sunday Morning by No Doubt.
                
                Github: https://github.com/nicole-m-martin

                Twitter: https://twitter.com/nmartinpdx
                </Typography>
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
                     href='https://www.linkedin.com/in/nicolemartinpdx/'>
                        <GitHubIcon />
                    </IconButton>
                    <IconButton>
                        <TwitterIcon />
                    </IconButton>
                </Grid>
            </Grid>
            <Grid item>
                <Typography variant="h3">BRANDON</Typography>
                <img src={BRANDON} alt="brandon"/>
                <Typography
                    variant="body1">
                    Hello, my name's Brandon, and I'm a full stack software engineer in Portland, OR. I enjoy applying my curiosity to figuring out how things work, and then using that knowledge to create something awesome for the people & communities I love. I probably don't dance or sing very well, but I commit to the performance. My first karaoke song was Careless Whisper; Tribute, Gin & Juice, and Rebel Yell are my go-to's.
                LinkedIn: https://www.linkedin.com/in/brandonperard/

                Github: https://github.com/bperard

                Twitter: https://twitter.com/SayYesToExcess
                </Typography>
                <Grid container
                    direction="row"
                    justify="space-between"
                    alignItems="center">
                    <IconButton>
                        <LinkedInIcon />
                    </IconButton>
                    <IconButton>
                        <GitHubIcon />
                    </IconButton>
                    <IconButton>
                        <TwitterIcon />
                    </IconButton>
                </Grid>
            </Grid>
            <Grid item>
                <Typography variant="h3">SORAYA</Typography>
                <img src=""/>
                <Typography
                    variant="body1">
                    Oh hi, I’m Soraya, a full-stack engineer in Portland, OR. I adore interactive storytelling, accessible design, and creating things with rad people. My go to karaoke song is ‘The One That I Want’ from Grease :zap:.
                LinkedIn: https://www.linkedin.com/in/soraya-benson/

                Github: https://github.com/sorayabenson

                Twitter: https://twitter.com/sorayamajd
                </Typography>
                <Grid container
                    direction="row"
                    justify="space-between"
                    alignItems="center">
                    <IconButton>
                        <LinkedInIcon />
                    </IconButton>
                    <IconButton>
                        <GitHubIcon />
                    </IconButton>
                    <IconButton>
                        <TwitterIcon />
                    </IconButton>
                </Grid>
            </Grid>
            <Grid item>
                <Typography variant="h3">LORI</Typography>
                <img src=""/>
                <Typography
                    variant="body1">
                Lori is a software engineer who loves hiking, cooking, and petting dogs. 
                She has a soft spot for Electric Light Orchestra at karaoke despite Jeff
                Lynne's angelic voice being far out of her vocal range. 
                LinkedIn: https://www.linkedin.com/in/loriwinston/

                Github: https://github.com/LoriWinston

                Twitter: https://twitter.com/LoriWinston8
                </Typography>
                <Grid container
                    direction="row"
                    justify="space-between"
                    alignItems="center">
                    <IconButton>
                        <LinkedInIcon />
                    </IconButton>
                    <IconButton>
                        <GitHubIcon />
                    </IconButton>
                    <IconButton>
                        <TwitterIcon />
                    </IconButton>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default About;
