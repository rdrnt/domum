import { createStore } from 'redux';
import { routerMiddleware } from 'react-router-redux'
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from './reducers';

const defaultState = {
  common: {
    articles: [],
  }
};

const store = createStore(rootReducer, defaultState, composeWithDevTools());

export default store;
