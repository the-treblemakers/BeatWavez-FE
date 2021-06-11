import React, { useState } from 'react';
import { AppBar, Menu, MenuItem, Button, Grid, Typography} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import styles from '../styles/NavBar.module.css';

const Navbar = () => { 
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar
      // className={styles.appBar}
      position="static">
      <Grid container direction="row" justify="space-between" alignItems="center">
        <Button 
          // className={styles.menuIcon}
          // style={{ flex: 1 }}
          aria-haspopup="true"
          aria-owns={anchorEl ? 'menu' : null}
          onClick={handleClick}>
          <MenuIcon/>
        </Button>
        <Menu 
          id="menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}>
          <MenuItem 
            component={Link}
            to='/'
            onClick={handleClose}
            // selected={pathname === '/'}
            >
                home
          </MenuItem>
          <MenuItem 
            component={Link}
            to='/greenroom'
            onClick={handleClose}
            // selected={pathname === '/greenroom'}
            >
                green room
          </MenuItem>
          <MenuItem 
            component={Link}
            to='/partyroom'
            onClick={handleClose}
            // selected={pathname === '/partyroom'}
            >
                party room
          </MenuItem>
          <MenuItem 
            component={Link}
            to='/about'
            onClick={handleClose}
            // selected={pathname === '/about'}
            >
                about
          </MenuItem>   
        </Menu>

        <Typography variant="h4">beatWaves🌴</Typography>
      </Grid>
    </AppBar>
  );
}; 

export default withRouter(Navbar);
