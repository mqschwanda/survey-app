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

const AuthorizedRoute = userContainer(({ user, component: Component, ...rest }) => (
  <Route {...rest} render={(props) => (user
    ? <Component {...props} />
    : <Redirect to='/sign-in' />
  )} />
));

export const Router = () => (
  <BrowserRouter>
    <Switch>
      <AuthorizedRoute exact path='/' component={Home} />
      <AuthorizedRoute exact path='/surveys' component={Surveys} />
      <AuthorizedRoute exact path='/surveys/:_id' component={Survey} />
      <AuthorizedRoute exact path='/editor/:_id' component={SurveyEditor} />
      <AuthorizedRoute exact path='/results/:_id' component={Results} />
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
