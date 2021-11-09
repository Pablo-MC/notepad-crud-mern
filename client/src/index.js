import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import App from './App';

// BOOTSWATCH CSS
import 'bootswatch/dist/minty/bootstrap.min.css';
// BOOTSTRAP JS
import 'bootstrap/dist/js/bootstrap.bundle';
// CUSTOM CSS
import './index.css';

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);