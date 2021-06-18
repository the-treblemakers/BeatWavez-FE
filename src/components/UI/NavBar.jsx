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
                <Grid item>
                    <Button
                        className={classes.menuButton}
                        aria-haspopup="true"
                        // color="#F96D10"
                        aria-owns={anchorEl ? 'menu' : null}
                        onClick={handleClick}>
                        <MenuIcon className={classes.icon} />
                    </Button>
                    <Menu
                        id="menu"
                        classes={{ paper: classes.menu }}
                        anchorEl={anchorEl}
                        keepMounted
                        open={Boolean(anchorEl)}
                        onClose={handleClose}>
                        <MenuItem
                            className={classes.menuItem}
                            component={Link}
                            to='/'
                            onClick={handleClose}
                            selected={pathname === '/'}
                        >
                            home
                        </MenuItem>
                        <MenuItem
                            className={classes.menuItem}
                            component={Link}
                            to='/greenroom'
                            onClick={handleClose}
                            selected={pathname === '/greenroom'}
                        >
                            green room
                        </MenuItem>
                        <MenuItem
                            className={classes.menuItem}
                            component={Link}
                            to='/partyroom'
                            onClick={handleClose}
                            selected={pathname === '/partyroom'}
                        >
                            party room
                        </MenuItem>
                        <MenuItem
                            className={classes.menuItem}
                            component={Link}
                            to='/about'
                            onClick={handleClose}
                            selected={pathname === '/about'}
                        >
                            meet the KJs
                        </MenuItem>
                    </Menu>
                </Grid>

                <Grid item>
                    <Grid container
                        direction="row"
                        alignItems="center"
                        justify="flex-end">
                        <Typography variant="h1">beatWavez</Typography>
                        <img src={"public/assets/beach32.png"} alt="beat wavez logo" className={classes.logo} style={{ marginRight: "1rem" }} />
                    </Grid>
                </Grid>

            </Grid>
        </AppBar>
    );
};

export default withRouter(Navbar);
