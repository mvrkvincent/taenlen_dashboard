import React from 'react';
import ReactDOM from 'react-dom';
import { configureStore } from './store/store';
import App from './App';
import * as serviceWorker from './serviceWorker';
import './stylesheets/_css_reset.css';
import './stylesheets/app.css';
import './stylesheets/nav.css';
import './stylesheets/auth.css';
import './stylesheets/tickers.css';
import './stylesheets/cells.css';
import './stylesheets/footer.css';
import './stylesheets/styles.css';

document.addEventListener('DOMContentLoaded', () => {
  let token = localStorage.getItem('token');
  let store;
  if (token) {
    const preloadedState = {
      auth: { token: token }
    };
    store = configureStore(preloadedState);
  } else {
    store = configureStore();
  }

  window.getState = store.getState;

  const root = document.getElementById('root');
  ReactDOM.render(<App store={store} />, root);

});

serviceWorker.unregister();