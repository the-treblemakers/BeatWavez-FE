import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from '../../containers/Home';
import GreenRoom from '../../containers/GreenRoom';
import PartyRoom from '../../containers/PartyRoom';
import Abount from '../../containers/Abount';
import '../styles/app.css';
import NavBar from '../UI/NavBar';

export default function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route path="/" exact render={(routerProps) => <Home {...routerProps} />} />
        <Route path="/greenroom" render={(routerProps) => <GreenRoom {...routerProps} />}/>
        <Route path="/partyroom" render={(routerProps) => <PartyRoom {...routerProps} />}/>
        <Route path="/about" render={(routerProps) => <Abount {...routerProps} />}/>
      </Switch>
    </Router>
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
