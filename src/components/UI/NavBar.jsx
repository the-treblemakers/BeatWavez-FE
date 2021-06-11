import React, { useState } from 'react';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import { AppBar, Menu, MenuItem, Button, Grid, Typography } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { useStyles } from '../styles/styles';

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
                    className={classes.menu}
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleClose}>
                    <MenuItem 
                        className={classes.link}
                        component={Link}
                        to='/'
                        onClick={handleClose}
                        selected={pathname === '/'}
                    >
                home
                    </MenuItem>
                    <MenuItem 
                        component={Link}
                        to='/greenroom'
                        onClick={handleClose}
                        selected={pathname === '/greenroom'}
                    >
                green room
                    </MenuItem>
                    <MenuItem 
                        component={Link}
                        to='/partyroom'
                        onClick={handleClose}
                        selected={pathname === '/partyroom'}
                    >
                party room
                    </MenuItem>
                    <MenuItem 
                        component={Link}
                        to='/about'
                        onClick={handleClose}
                        selected={pathname === '/about'}
                    >
                about
                    </MenuItem>   
                </Menu>

                <Typography variant="h1">beatWaves🌴</Typography>
        
            </Grid>
        </AppBar>
    );
}; 

export default withRouter(Navbar);
