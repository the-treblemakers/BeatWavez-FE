import React from 'react';
import '../../components/styles/app.css';
import NavBar from '../UI/NavBar';

export default function App() {
  return (
    <>
      <NavBar />
    </>
  );
}

// import React, { useState } from 'react';
// import AppBar from '@material-ui/core/AppBar';
// import Toolbar from '@material-ui/core/Toolbar';
// import Menu from '@material-ui/core/Menu';
// import MenuItem from '@material-ui/core/MenuItem';
// import Button from '@material-ui/core/Button';
// import MenuIcon from '@material-ui/icons/Menu';


// const Navbar = () => {
//   const [open, setOpen] = useState(false);

//   return (
//     <AppBar position="static">
//       <Menu 
//         // anchorEl={anchorEl}
//         open={open}>
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
// };

// export default Navbar;

// <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
//   Open Menu
// </Button>
// <Menu
//   id="simple-menu"
//   anchorEl={anchorEl}
//   keepMounted
//   open={Boolean(anchorEl)}
//   onClose={handleClose}
// >
//   <MenuItem onClick={handleClose}>Profile</MenuItem>
//   <MenuItem onClick={handleClose}>My account</MenuItem>
//   <MenuItem onClick={handleClose}>Logout</MenuItem>
// </Menu>
