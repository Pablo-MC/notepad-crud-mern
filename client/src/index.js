import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from './store/index';
import App from './App';

// BOOTSWATCH CSS
import 'bootswatch/dist/minty/bootstrap.min.css';
// BOOTSTRAP JS
import 'bootstrap/dist/js/bootstrap.bundle.min';
// CUSTOM CSS
import './index.css';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);