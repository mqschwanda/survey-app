import throttleMiddleware from 'redux-throttle';

const defaultWait = 300;
const defaultThrottleOption = { // https://lodash.com/docs#throttle
  leading: true,
  trailing: true,
};
export const throttle = throttleMiddleware(defaultWait, defaultThrottleOption);

export default throttle;
