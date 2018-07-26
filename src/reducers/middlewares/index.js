import { applyMiddleware, compose } from '../../modules/redux';
import debounce from '../../modules/redux-debounce';
import throttle from '../../modules/redux-throttle';
import thunk from '../../modules/redux-thunk';

import { routerMiddleware as router } from '../router';

export const middlewares = applyMiddleware(router, debounce, thunk, throttle);

export default compose(middlewares);
