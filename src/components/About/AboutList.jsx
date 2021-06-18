import React from 'react';
import { List, ListItem } from '@material-ui/core';
import aboutArray from './about.json';
import AboutItem from './AboutItem';

const AboutList = () => {
    return (
        <List>
            {aboutArray.map((person, i) => (
                <ListItem key={i}>
                    <AboutItem {...person}/>
                </ListItem>
            ))}
        </List>
    );
};

export default AboutList;


