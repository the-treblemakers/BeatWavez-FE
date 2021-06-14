import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from '../UI/NavBar';
import Home from '../../containers/Home';
import GreenRoom from '../../containers/GreenRoom';
import PartyRoom from '../../containers/PartyRoom';
import Abount from '../../containers/About';
import '../styles/app.css';
import { ThemeProvider } from '@material-ui/core';
import { theme } from '../styles/theme';
import TestRoom from '../../containers/TestRoom';

export default function App() {

    return (
        <ThemeProvider theme={theme}>
            <Router>
                <NavBar />
                <Switch>
                    <Route path="/" exact render={(routerProps) => <Home {...routerProps} />} />
                    <Route path="/greenroom" render={(routerProps) => <GreenRoom {...routerProps} />} />
                    <Route path="/partyroom" render={(routerProps) => <PartyRoom {...routerProps} />} />
                    <Route path="/about" render={(routerProps) => <Abount {...routerProps} />} />
                    <Route path="/test" render={(routerProps) => <TestRoom {...routerProps} />} />
                </Switch>
            </Router>
        </ThemeProvider>
    );

}
