import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import Dashboard from './components/Dashboard';
import { fetchUser } from './actions/auth_actions';

const App = ({ store }) => { 

  useEffect(() => {
    if (localStorage.getItem('token')) {
      store.dispatch(fetchUser());
    }
  });

  return (
      <Provider store={store}>
        <Dashboard />
      </Provider>
  );
};

export default App;
