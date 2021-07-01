import React, { useEffect } from 'react';
import { Container } from '@material-ui/core';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';



// switch,route

import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Auth from './components/Auth/Auth';
import MiddlePageCS2030S from './components/MiddlePage/CS2030SMiddlePage';
import NotePageCS2030s from './components/NoteRepositories/CS2030SNotePage';
import ModuleReviewsCS2030s from  './components/ModuleReviews/CS2030SModuleReviews';
import FilesList from './components/NoteRepositories/FilesList';
import StudyBuddy from './components/StuddyBuddy/StudyBuddy'



const App = () => (

    <BrowserRouter>
      <Container maxWidth="lg">
        <Navbar />
        <main>
        <Switch>
          <Route exact path="/" exact component={Home} />
          <Route exact path="/course/60c04d7d337731fe418ee112" component={MiddlePageCS2030S} />
          <Route exact path="/CS2030Sreviews" component={ModuleReviewsCS2030s} />
          <Route exact path="/CS2030Sbuddy" component={StudyBuddy} />
          <Route exact path="/auth" exact component={Auth} />
      <div className="header">
      <h1>Notes Repository</h1>
      <nav>
      <NavLink activeClassName="active" to="/course/60c04d7d337731fe418ee112" exact={true}>
          Go back to Middle Page 
        </NavLink>
        <NavLink activeClassName="active" to="/CS2030Supload" exact={true}>
          File Upload
        </NavLink>
        <NavLink activeClassName="active" to="/CS2030Slist">
          Files List
        </NavLink>
      </nav>
          <Route exact path="/CS2030Snotes" component = {FilesList} /> 
          <Route exact path="/CS2030Slist" component = {FilesList} />
          <Route exact path="/CS2030Supload" component = {NotePageCS2030s} />
          {/* <Route exact path="/CS2030SEdit/" component = {NotePageCS2030s} />  */}
          <Route exact path="/CS2030Slist#/" component = {FilesList} /> 
      </div>
        </Switch>
        </main>
      </Container>
    </BrowserRouter>
);

export default App;