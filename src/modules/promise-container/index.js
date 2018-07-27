import React from 'react';
import reactPromiseContainer from 'react-promise-container';

export const promiseContainer = (mapPromiseToProps) => (
  Component,
  LoadingComponent = () => (<p>loading...</p>),
  ErrorComponent = (error) => (<p>{error.message || error}</p>),
) => reactPromiseContainer(mapPromiseToProps)(
  Component,
  LoadingComponent,
  ErrorComponent,
);

export default promiseContainer;
