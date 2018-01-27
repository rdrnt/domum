import { createStore, applyMiddleware } from 'redux';
import { routerMiddleware } from 'react-router-redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import rootReducer from './reducers';

const defaultState = {
  common: {
    articles: [],
    weather: {},
  }
};

const store = createStore(rootReducer, defaultState, composeWithDevTools(applyMiddleware(thunk)));

export default store;
