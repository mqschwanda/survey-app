import { createStore } from 'redux';
import reducers from './reducers';
import { default as middlewares } from './middlewares';

const store = createStore(reducers, middlewares);


store.subscribe(() => {
  console.log('store change', store.getState()); // eslint-disable-line no-console
});


export default store;
