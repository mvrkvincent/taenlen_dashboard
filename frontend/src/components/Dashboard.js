import React from 'react';
import { connect } from 'react-redux';
import Footer from './Footer';
import Nav from './Nav';
import Login from './auth/Login';
import Register from './auth/Register';
import Cells from './cells/Cells';
import DevPlaceholder from './DevPlaceholder';

const Dashboard = ({ loggedIn, view }) => {
  const dev = false;

  const Dashboard = dev ? <DevPlaceholder /> : <Cells />;
  
  const generateForms = () => {
    
    switch (view) {
      case 'login':
        return <Login />;
      case 'register':
        return <Register />
      default:
        return <Login />;
    }
  };

  const generateView = () => {
    
    switch (loggedIn) {
      case true:
        return Dashboard;
      case false:
        return generateForms();
      default:
        generateForms();
    }
  };

  return (
    <div className="container">

      <Nav />

      <main>
        {generateView()} 
      </main>

      <span className="footnote">1.  <i>noun, welsh [taen·llen]</i>: A spreadsheet.</span>

      <Footer />
    </div>

  );
};

const msp = ({ auth, ui }) => ({
  loggedIn: auth.isAuthenticated,
  view: ui.view
})


export default connect(msp)(Dashboard);

