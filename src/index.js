import React from 'react';
import ReactDOM from 'react-dom';
import Dashboard from './js/Dashboard';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';

import store from './js/store';

import './sass/main.scss';

ReactDOM.render(
  <Provider store={store}>
    <Dashboard />
  </Provider>
  , document.getElementById('root'));
registerServiceWorker();
