import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js'
import 'bootstrap/dist/js/bootstrap.min.js'
import { Provider } from 'react-redux'
import configureStore from './store';
import "antd/dist/antd.css";
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { axiosInterceptors } from './helpers'
//import './index.css';
require('./index.css');

ReactDOM.render(
  <Provider store={configureStore()}>
    <App />
  </Provider>, document.getElementById('app'));

axiosInterceptors();
registerServiceWorker();