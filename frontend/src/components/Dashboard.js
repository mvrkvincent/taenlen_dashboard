import React, { useState } from 'react';
import { connect } from 'react-redux';
import Footer from './Footer';
import Nav from './Nav';
import Login from './auth/Login';
import Register from './auth/Register';
import Tabs from './tabs/Tabs';
import DevPlaceholder from './DevPlaceholder';

const Dashboard = ({ loggedIn }) => {
  const dev = false;

  const [form, setForm] = useState('login');
  const Dashboard = dev ? <DevPlaceholder /> : <Tabs />;
  
  const generateForms = () => {
    
    switch (form) {
      case 'login':
        return <Login setForm={setForm} />;
      case 'register':
        return <Register setForm={setForm} />
      default:
        return <Login />;
    }
  };

  const generateContent = () => {
    
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
        {generateContent()} 
      </main>

      <span className="footnote">1.  <i>noun, welsh [taen·llen]</i>: A spreadsheet.</span>

      <Footer />
    </div>

  );
};

const msp = ({ auth }) => ({
  loggedIn: auth.isAuthenticated
})


export default connect(msp)(Dashboard);

