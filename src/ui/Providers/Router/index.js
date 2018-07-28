import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';

import {
  Authentication,
  Home,
  NotFound,
  Results,
  Survey,
  SurveyEditor,
  Surveys,
} from '../../Pages';

export const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={Home} />

      <Route path='/surveys' component={Surveys} />
      <Route path='/survey/:_id' component={Survey} />

      <Route exact path='/editor' component={SurveyEditor} />
      <Route path='/editor/:_id' component={SurveyEditor} />

      <Route path='/results/:_id' component={Results} />

      <Route path='/auth' component={Authentication} />

      <Route path='*' component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default Router;
