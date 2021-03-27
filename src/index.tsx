import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { Store } from '@store';

import App from './App';

import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/icons.min.css';
import './assets/css/app.min.css';
import 'react-toastify/dist/ReactToastify.css';
import './styles/index.css';
// import './assets/css/app-dark.min.css';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={Store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
