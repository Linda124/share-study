import React, { useEffect } from 'react';
import { Container } from '@material-ui/core';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import { useDispatch } from 'react-redux';

// switch,route

import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Auth from './components/Auth/Auth';
import MiddlePageCS2030S from './components/MiddlePage/CS2030SMiddlePage';
import NotePageCS2030s from './components/NoteRepositories/CS2030SNotePage';
import ModuleReviewsCS2030s from  './components/ModuleReviews/CS2030SModuleReviews';


const App = () => (

    <BrowserRouter>
      <Container maxWidth="lg">
        <Navbar />
        <main>
        <Switch>
          <Route exact path="/" exact component={Home} />
          <Route exact path="/course/60c04d7d337731fe418ee112" component={MiddlePageCS2030S} />
          <Route exact path="/CS2030Snotes" component={NotePageCS2030s} />
          <Route exact path="/CS2030Sreviews" component={ModuleReviewsCS2030s} />
          <Route exact path="/auth" exact component={Auth} />
        </Switch>
        </main>
      </Container>
    </BrowserRouter>
);

export default App;