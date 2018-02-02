import React from 'react';
import {Route, Redirect, Switch} from 'react-router-dom';
import HomePage from './pages/HomePage';
import IssueIndexPage from './containers/IssueIndexContainer';
import Navbar from './components/Navbar';


export const routes =
  (
    <div>
      <Navbar />
      <Route exact path='/issues' component={IssueIndexPage}/>
      </div>
    )

