import { combineReducers } from 'redux';
import { routerReducer as router } from './router';
import { contentReducer as content } from './content';
import { themeReducer as theme } from './theme';

export default combineReducers({ router, content, theme });
