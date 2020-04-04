import React from 'react';
import { connect } from 'react-redux';
import Footer from './Footer';
import Nav from './Nav';
import Login from './auth/Login';
import Register from './auth/Register';
import Cells from './cells/Cells';

const Dashboard = ({ isLoading, view }) => {

  const darkMode = {
    dashboard: {
      color: '#ffffff',
      background: '#121212'
    },
    module: {
      background: '#1c1c1c',
      borderColor: '#1c1c1c',
      boxShadow: '2px 2px 10px rgba(0, 0, 0, 0.5)'
    },
    button: {
      color: '#26C6DA',
      background: '#2f2f2f',
      borderColor: '#2f2f2f',
      boxShadow: '2px 2px 10px rgba(0, 0, 0, 0.2)'
    },
    input: {
      color: '#FFFFFF'
    },
    dash: {
      color: '#26C6DA',
      background: '#2f2f2f',
      borderColor: '#2f2f2f',
      boxShadow: '2px 2px 10px rgba(0, 0, 0, 0.5)'
    },
    logout: {
      background: '#2f2f2f',
      borderColor: '#2f2f2f',
      boxShadow: '2px 2px 10px rgba(0, 0, 0, 0.5)'
    },
  };

  const generateView = () => {
    if (isLoading) {
      return <h1 className="title">Loading...</h1>
    } else {
      switch (view) {
        case 'login':
          return <Login darkMode={darkMode}/>;
        case 'register':
          return <Register darkMode={darkMode}/>
        default:
          return <Cells darkMode={darkMode}/>;
      }
    }
  };

  return (
    <div id="dashboard" style={darkMode.dashboard} className="column">

      <Nav darkMode={darkMode}/>

      {generateView()} 

      <Footer />
      
    </div>
  );
};

const msp = ({ ui }) => ({
  view: ui.view,
  isLoading: ui.isLoading
})


export default connect(msp)(Dashboard);

