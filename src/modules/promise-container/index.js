import React, { Component } from 'react';
import reactPromiseContainer from 'react-promise-container';


const LoadingComponent = () => (
  <p>loading...</p>
);

const ErrorComponent = (error) => (
  <p>{error.message || error}</p>
)

export const promiseContainer = (mapPromiseToProps) => (
  Component,
  LoadingComponent = LoadingComponent,
  ErrorComponent = ErrorComponent,
) => reactPromiseContainer(mapPromiseToProps)(
  Component,
  LoadingComponent,
  ErrorComponent,
);

export default promiseContainer;
