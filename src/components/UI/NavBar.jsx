import React, { useState } from 'react';
import { AppBar, Menu, MenuItem, Button} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from 'react-router-dom';


const Navbar = () => { 
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static">
      <Button onClick={handleClick}>
        <MenuIcon/>
      </Button>
      <Menu 
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}>
        <MenuItem 
          component={Link}
          to="/"
          onClick={handleClose}>
              home
        </MenuItem>
        <MenuItem 
          component={Link}
          to="/greenroom"
          onClick={handleClose}>
              green room
        </MenuItem>
        <MenuItem 
          component={Link}
          to="/partyroom"
          onClick={handleClose}>
              party room
        </MenuItem>
        <MenuItem 
          component={Link}
          to="/about"
          onClick={handleClose}>
              about
        </MenuItem>
              
      </Menu>
    </AppBar>
  );
}; 

export default Navbar;
