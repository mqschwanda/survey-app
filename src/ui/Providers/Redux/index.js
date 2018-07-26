import React from 'react';
import { Provider } from 'react-redux';
import store from '../../../reducers';

export const ReduxProvider = (props) =>
  <Provider store={store} {...props} />;
export default ReduxProvider;
