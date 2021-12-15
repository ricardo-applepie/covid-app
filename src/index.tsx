import React from 'react';
import ReactDOM from 'react-dom';

import bootstrap from 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import './styles/application.scss';
import { Provider } from 'react-redux'; 
import {store} from './redux/store'; 

import App from './App';

ReactDOM.render(
  <React.StrictMode>
      <Provider store={store}>

          <App />
      </Provider>,

  </React.StrictMode>,
  document.getElementById('root')
);

