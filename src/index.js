import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';

import Dashboard from './js/containers/Dashboard';

import store from './js/store';

import './sass/main.scss';

ReactDOM.render(
  <Provider store={store}>
    <Dashboard />
  </Provider>
  , document.getElementById('root'));
registerServiceWorker();
