import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import s from './redux/store';

import './index.css';
import App from './App';

ReactDOM.render(
  <Provider store={s.store}>
    <BrowserRouter>
      <React.StrictMode>
        <PersistGate persistor={s.persistor}>
          <App />
        </PersistGate>
      </React.StrictMode>
    </BrowserRouter>
  </Provider>
  ,
  document.getElementById('root')
);
