import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import { Home, SurveyEditor, NotFound } from '../../Pages';

export const Router = () => (
  <BrowserRouter>
    <div>
      <Route exact path='/' component={Home}/>
      <Route exact path='/editor' component={SurveyEditor}/>
      <Route path='*' component={NotFound} />
    </div>
  </BrowserRouter>
);

export default Router;
