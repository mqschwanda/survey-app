import { isDev } from '../helpers';

const logStore = (store) =>
  () => console.log('redux update:\n', store.getState());

export const devLogPlugin = (store) =>
  isDev() && store.subscribe(logStore(store));
