import React, { useState } from 'react';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import { AppBar, Menu, MenuItem, Button, Grid, Typography } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { useStyles } from '../Styles/navbarStyles';
import '../Styles/app.css';

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
        <AppBar
            className={classes.appBar}
            // classes={{ paper: classes.appShadow }}
            position="static">
            <Grid container direction="row" justify="space-between" alignItems="center">
                <Button 
                    className={classes.menuButton}
                    aria-haspopup="true"
                    // color="#F96D10"
                    aria-owns={anchorEl ? 'menu' : null}
                    onClick={handleClick}>
                    <MenuIcon/>
                </Button>
                <Menu 
                    id="menu"
                    classes={{ paper: classes.menu }}
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleClose}>
                    <MenuItem 
                        classes={{ selected: classes.selected }}
                        className={classes.link}
                        component={Link}
                        to='/'
                        onClick={handleClose}
                        selected={pathname === '/'}
                    >
                  home
                    </MenuItem>
                    <MenuItem
                        classes={{ selected: classes.selected }} 
                        component={Link}
                        to='/greenroom'
                        onClick={handleClose}
                        selected={pathname === '/greenroom'}
                    >
                  green room
                    </MenuItem>
                    <MenuItem
                        classes={{ selected: classes.selected }} 
                        component={Link}
                        to='/partyroom'
                        onClick={handleClose}
                        selected={pathname === '/partyroom'}
                    >
                  party room
                    </MenuItem>
                    <MenuItem
                        classes={{ selected: classes.selected }} 
                        component={Link}
                        to='/about'
                        onClick={handleClose}
                        selected={pathname === '/about'}
                    >
                  meet the KJs
                    </MenuItem> 
                </Menu>

                <Typography variant="h1">beatWavez🌴</Typography>
        
            </Grid>
        </AppBar>
    );
}; 

export default withRouter(Navbar);
