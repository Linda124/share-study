import React, { useEffect } from 'react';
import { Container } from '@material-ui/core';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import { useDispatch } from 'react-redux';

// switch,route

import Navbar from './components/Navbar/Navbar';
import Auth from './components/Navbar/Auth/Auth';
import Home from './components/Home/Home';


const App = () => (
    const dispatch = useDispatch();

    useEffect(() => {
      dispatch();
    }, [dispatch]);

    <BrowserRouter>
      <Container maxWidth="lg">
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/auth" exact component={Auth} />
        </Switch>
      </Container>
    </BrowserRouter>
);

export default App;