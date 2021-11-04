import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
//setup bootstrap

import "bootstrap/dist/css/bootstrap.min.css"
import "jquery/dist/jquery.min.js"
import "popper.js/dist/umd/popper.min.js"
import "bootstrap/dist/js/bootstrap.min.js"

import { BrowserRouter } from "react-router-dom"
import './index.css';
import { Provider } from 'react-redux';
import store from './Store.jsx';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      
      <BrowserRouter>
        <App />

      </BrowserRouter>

    </Provider>

  </React.StrictMode>,
  document.getElementById('root')
);

