import React from 'react';
import ReactDOM from 'react-dom';
import { configureStore } from './store/store';
import App from './App';
import * as serviceWorker from './serviceWorker';
import './stylesheets/_css_reset.css';
import './stylesheets/app.css';
import './stylesheets/auth.css';

document.addEventListener('DOMContentLoaded', () => {

  let store;
  if (window.currentUser) {
    const preloadedState = {
      session: { id: window.currentUser.id }
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }

  window.getState = store.getState;

  const root = document.getElementById('root');
  ReactDOM.render(<App store={store} />, root);

});

serviceWorker.unregister();