import React, { useState } from 'react';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import { AppBar, StylesProvider, Menu, MenuItem, Button, Grid, Typography } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

import { useStyles } from '../styles/styles';
import '../styles/app.css';

const Navbar = (props) => { 
    const [anchorEl, setAnchorEl] = useState(null);
    const { pathname } = props.location;

    const handleClick = (e) => {
        setAnchorEl(e.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const classes = useStyles();

  

    return (
    // <StylesProvider injectFirst>
        <AppBar
            className={classes.appBar}
            // classes={{ paper: classes.appShadow }}
            position="static">
            <Grid container direction="row" justify="space-between" alignItems="center">
                <Button 
                    aria-haspopup="true"
                    aria-owns={anchorEl ? 'menu' : null}
                    onClick={handleClick}>
                    <MenuIcon/>
                </Button>
                <Menu 
                    id="menu"
<<<<<<< HEAD
                    className={classes.menu}
=======
                    // classes={{ paper: classes.menu }}
                    // className={classes.menu}
                    // PaperProps ={{
                    //   classes
                    // }}
>>>>>>> origin/dev
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleClose}>
                    <MenuItem 
<<<<<<< HEAD
=======
                        classes={{ selected: classes.selected }}
>>>>>>> origin/dev
                        className={classes.link}
                        component={Link}
                        to='/'
                        onClick={handleClose}
                        selected={pathname === '/'}
                    >
<<<<<<< HEAD
                home
=======
                  home
>>>>>>> origin/dev
                    </MenuItem>
                    <MenuItem 
                        component={Link}
                        to='/greenroom'
                        onClick={handleClose}
                        selected={pathname === '/greenroom'}
                    >
<<<<<<< HEAD
                green room
=======
                  green room
>>>>>>> origin/dev
                    </MenuItem>
                    <MenuItem 
                        component={Link}
                        to='/partyroom'
                        onClick={handleClose}
                        selected={pathname === '/partyroom'}
                    >
<<<<<<< HEAD
                party room
=======
                  party room
>>>>>>> origin/dev
                    </MenuItem>
                    <MenuItem 
                        component={Link}
                        to='/about'
                        onClick={handleClose}
                        selected={pathname === '/about'}
                    >
<<<<<<< HEAD
                about
                    </MenuItem>   
=======
                  about
                    </MenuItem> 
>>>>>>> origin/dev
                </Menu>

                <Typography variant="h1">beatWaves🌴</Typography>
        
            </Grid>
        </AppBar>
<<<<<<< HEAD
=======
    // </StylesProvider>
>>>>>>> origin/dev
    );
}; 

export default withRouter(Navbar);
