import React from 'react';
import { connect } from 'react-redux';
import Footer from './Footer';
import Nav from './Nav';
import Login from './auth/Login';
import Register from './auth/Register';
import Cells from './cells/Cells';

const Dashboard = ({ isLoading, view }) => {

  const generateView = () => {
    if (isLoading) {
      return <h1 className="title">Loading...</h1>
    } else {
      switch (view) {
        case 'login':
          return <Login />;
        case 'register':
          return <Register />
        default:
          return <Cells />;
      }
    }
  };

  return (
    <div id="dashboard">

      <Nav />

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

