import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Login from '../components/Login';
import Register from '../components/Register';
import PageTemplate from '../components/PageTemplate';
import Widgets from '../components/Widgets';

const Dashboard = () => {
  const [page, setPage] = useState('login');
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState();
  
  const generateForms = () => {
    switch (page) {
      case 'login':
        return <Login setPage={setPage} setLoggedIn={setLoggedIn} />;

      case 'register':
        return <Register setPage={setPage} setLoggedIn={setLoggedIn} />;

      default:
        return <Login />;
    }
  };

  const generateContent = () => {
    switch (loggedIn) {
      case true:
        return <Widgets user={user} />;

      case false:
        return generateForms();

      default:
        generateForms();
    }
  };

  useEffect(() => {
    if (localStorage.getItem('access_token')) {
      setLoggedIn(true);
    }
  }, []);

  useEffect(() => {
    if (loggedIn) {
      axios.get('http://localhost:8000/api/current_user/', {
        headers: {
          Authorization: 'JWT ' + localStorage.getItem('access_token'),
        }
      })
        .then(res => {
          setUser(res.data.username);
          console.log(res);
        });
    }
  }, [loggedIn]);


  return (

    <PageTemplate setLoggedIn={setLoggedIn} loggedIn={loggedIn}>

      {generateContent()} 

    </PageTemplate>

  );
};

export default Dashboard;

