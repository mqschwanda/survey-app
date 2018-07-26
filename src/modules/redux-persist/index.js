import { persistStore, persistCombineReducers } from 'redux-persist';
import { REHYDRATE } from 'redux-persist/lib/constants';

import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web and AsyncStorage for react-native
import { isDev } from '../helpers';

/**
 * [onPersistStore description]
 * @param  {[type]} store [description]
 * @return {[type]}       [description]
 *//* eslint-disable no-console */
const onPersistStore = (store) => () => // if you want to log restored state
  isDev() && console.log('redux-persist:\n', store.getState());
//* eslint-enable no-console */

/**
 * `REHYDRATE` action is not being called every time, so this will force the
 * dispatch when it was created
 * see: https://github.com/rt2zz/redux-persist/issues/603
 * @param  {object} persistor [description]
 * @return {object}           [description]
 */
const rehydratePersistor = (persistor) =>
  persistor.dispatch({ type: REHYDRATE }) && persistor;

/**
 * [createPersistor description]
 * @param  {object} store           The redux store to be persisted.
 * @param  {object} [config = null] config object
 */
export const createPersistor = (store, config = null) =>
  rehydratePersistor(persistStore(store, config, onPersistStore(store)));

/**
 * Use the reducer combining function provided by redux-persist
 * @param  {object} reducers [description]
 * @return {object}          [description]
 */
export const combineReducers = (reducers) =>
  persistCombineReducers({ key: 'primary', storage }, reducers);
