import React, { useState } from 'react';
import { connect } from 'react-redux';
import Footer from './Footer';
import Nav from './Nav';
import Login from './Login';
import Register from './Register';
import Widgets from './Widgets';

const Dashboard = ({ loggedIn, firstName }) => {
  const [form, setForm] = useState('login');
  
  const generateForms = () => {
    
    switch (form) {
      case 'login':
        
        return <Login setForm={setForm} />;

      case 'register':
        return <Register setForm={setForm} />;

      default:
        return <Login />;
    }
  };

  const generateContent = () => {
    
    switch (loggedIn) {
      case true:
        return <Widgets firstName={firstName} />;

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

const msp = ({ session }) => ({

  loggedIn: session.isAuthenticated,
  firstName: session.user ? session.user.first_name : ''

})


export default connect(msp)(Dashboard);

