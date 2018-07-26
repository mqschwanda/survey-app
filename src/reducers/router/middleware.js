import { routerMiddleware } from 'react-router-redux';
import { createBrowserHistory, createMemoryHistory } from 'history';

export const history = (typeof window != 'undefined' && window.document) // Create a history depending on server or client
  ? createBrowserHistory()
  : createMemoryHistory();

export default routerMiddleware(history); // Build the middleware for intercepting and dispatching navigation actions;
