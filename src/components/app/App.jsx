import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import NavBar from '../UI/NavBar';
import Home from '../../containers/Home';
import GreenRoom from '../../containers/GreenRoom';
import PartyRoom from '../../containers/PartyRoom';
import Abount from '../../containers/Abount';
import '../styles/app.css';
import { ThemeProvider } from '@material-ui/core';
import { theme } from '../styles/theme';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
    <Router>
      <NavBar />
      <Switch>
        <Route
          path="/"
          exact
          render={(routerProps) => <Home {...routerProps} />}
        />
        <Route
          path="/greenroom"
          render={(routerProps) => <GreenRoom {...routerProps} />}
        />
        <Route
          path="/partyroom"
          render={(routerProps) => <PartyRoom {...routerProps} />}
        />
        <Route
          path="/about"
          render={(routerProps) => <Abount {...routerProps} />}
        />
      </Switch>
    </Router>
    </ThemeProvider>
  );
}
