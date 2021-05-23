import React from 'react';
import { Container, AppBar, Typography } from '@material-ui/core';

import ss from './images/ss.png';
import useStyles from './styles';

const App = () => {
    const classes = useStyles();

    return (
        <Container maxWidth="lg">
            <AppBar className={classes.appBar} position="static" color="inherit">
                <Typography className={classes.heading} variant="h2" align="center">Share&Study</Typography>
                <img className={classes.image} src={ss} alt="ss" height="120" />
            </AppBar> 
        </Container>

    );
}

export default App;