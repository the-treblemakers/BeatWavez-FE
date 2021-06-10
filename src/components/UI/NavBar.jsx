// import React from "react";
// import Button from "@material-ui/core/Button";
// import Menu from "@material-ui/core/Menu";
// import AppBar from '@material-ui/core/AppBar';
// import MenuItem from "@material-ui/core/MenuItem";

// const NavBar=() => {
//   const [anchorEl, setAnchorEl] = React.useState(null);
//   const handleClick = event => {
//     setAnchorEl(event.currentTarget);
//   };
//   const handleClose = () => {
//     setAnchorEl(null);
//   };
//   return (
//     <AppBar position="static">
//       <Button onClick={handleClick}>Open</Button>
//       <Menu
//         anchorEl={anchorEl}
//         keepMounted
//         open={Boolean(anchorEl)}
//         onClose={handleClose}
//       >
//         <MenuItem onClick={handleClose}>home</MenuItem>
//         <MenuItem onClick={handleClose}>songbook</MenuItem>
//         <MenuItem onClick={handleClose}>partyroom</MenuItem>
//         <MenuItem onClick={handleClose}>abount</MenuItem>
//     </AppBar>
//   );
// };


import React, { useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import MenuIcon from '@material-ui/icons/Menu';


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
        <MenuItem onClick={handleClose}>
              Home
        </MenuItem>
        <MenuItem onClick={handleClose}>
              Songbook
        </MenuItem>
        <MenuItem onClick={handleClose}>
              Party Room
        </MenuItem>
        <MenuItem onClick={handleClose}>
              Abount
        </MenuItem>
              
      </Menu>
    </AppBar>
  );
}; 

export default Navbar;
