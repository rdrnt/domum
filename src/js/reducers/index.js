import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';

import common from './common';
import weather from './weather';

const rootReducer = combineReducers({
  common,
  weather,
  router,
});

export default rootReducer;
