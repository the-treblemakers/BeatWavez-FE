import React from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import AppBar from '@material-ui/core/AppBar';
import MenuItem from "@material-ui/core/MenuItem";

const NavBar=() => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <AppBar position="static">
      <Button onClick={handleClick}>Open</Button>
      <Menu
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>home</MenuItem>
        <MenuItem onClick={handleClose}>songbook</MenuItem>
        <MenuItem onClick={handleClose}>partyroom</MenuItem>
        <MenuItem onClick={handleClose}>abount</MenuItem>
    </AppBar>
  );
};


{/* // import React, { useState } from 'react';
// import AppBar from '@material-ui/core/AppBar';
// import Toolbar from '@material-ui/core/Toolbar';
// import Menu from '@material-ui/core/Menu';
// import MenuItem from '@material-ui/core/MenuItem';
// import Button from '@material-ui/core/Button';
// import MenuIcon from '@material-ui/icons/Menu';


// const Navbar = () => { */}

{/* //   const [open, setOpen] = useState(false);

//   return (
//     <AppBar position="static">
//       <Menu open={open}>
//         <MenuIcon/>
//         <MenuItem>
//               Home
//         </MenuItem>
//         <MenuItem>
//               Songbook
//         </MenuItem>
//         <MenuItem>
//               Party Room
//         </MenuItem>
//         <MenuItem>
//               Abount
//         </MenuItem>
              
//       </Menu>
//     </AppBar>
//   );
// }; */}

export default Navbar;
