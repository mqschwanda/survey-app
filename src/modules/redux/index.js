// import redux from 'redux';
//
// export const applyMiddleware = redux.applyMiddleware;
//
// export const compose =
//   typeof window === 'object' &&
//   window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
//     window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
//       // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
//     }) : redux.compose;

import { applyMiddleware as reduxApplyMiddleware, compose as reduxCompose } from 'redux';

export const applyMiddleware = reduxApplyMiddleware;

export const compose =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : reduxCompose;
