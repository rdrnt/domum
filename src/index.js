import React from 'react';
import ReactDOM from 'react-dom';
import Dashboard from './js/Dashboard';
import registerServiceWorker from './registerServiceWorker';
import './sass/main.scss';

ReactDOM.render(<Dashboard />, document.getElementById('root'));
registerServiceWorker();
