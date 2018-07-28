import React from 'react';
import reactPromiseContainer from 'react-promise-container';
import { Loading } from '../../ui/Components';

export const promiseContainer = (mapPromiseToProps) => (
  Component,
  LoadingComponent = Loading,
  ErrorComponent = (error) => (<p>{error.message || error}</p>),
) => reactPromiseContainer(mapPromiseToProps)(
  Component,
  LoadingComponent,
  ErrorComponent,
);

export default promiseContainer;
