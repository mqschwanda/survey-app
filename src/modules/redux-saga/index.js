import sagaMiddleware from 'redux-saga';

import mySagas from './sagas';

export const sagas = mySagas;

// create the saga middleware
export const saga = sagaMiddleware();

export const runSaga = () => {
  saga.run(sagas);
};


export default saga;
