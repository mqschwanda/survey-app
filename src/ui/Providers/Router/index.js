import React from 'react';
import {
  Route,
  BrowserRouter,
  Switch,
  Redirect,
} from 'react-router-dom';

import {
  Authentication,
  Home,
  NotFound,
  Results,
  Survey,
  SurveyEditor,
  Surveys,
} from '../../Pages';

import {
  signOutUserContainer,
  userContainer,
} from '../../../modules/firestore/containers';

export const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={userContainer(Home)} />
      <Route exact path='/surveys' component={Surveys} />
      <Route exact path='/surveys/:_id' component={Survey} />
      <Route exact path='/editor/:_id' component={SurveyEditor} />
      <Route exact path='/results/:_id' component={Results} />
      <Route exact path='/sign-in' component={Authentication} />
      <Route
        exact
        path='/sign-out'
        component={signOutUserContainer()(() => <Redirect to='/sign-in' />)}
      />

      <Route path='*' component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default Router;
