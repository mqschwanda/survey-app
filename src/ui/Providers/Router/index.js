import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';

import { Home, Survey, SurveyEditor, NotFound } from '../../Pages';

export const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route path='/survey/:_id' component={Survey} />
      <Route exact path='/editor' component={SurveyEditor} />
      <Route path='*' component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default Router;
