import React from 'react';
import { connect } from 'react-redux';
import { logout } from '../actions/auth_actions';

const Nav = ({ firstName, loggedIn, logout, darkStyle }) => {

  const generateButtons = () => {
    const welcome = (firstName === 'Demo') ? `${firstName}` : `${firstName}'s`;

    switch (loggedIn) {
      case true: 
        return( 
          <div className="nav-buttons row">
            <button 
              style={darkStyle.logout} 
              onClick={logout} 
              className="left logout">Log Out</button>
            <button 
              style={darkStyle.dash}
              className="dash-button">{welcome} Dashboard</button>
          </div>
        )
      default: 
        return( 
          <div className="row">
            <button style={darkStyle.dash} className="dash-button">Dashboard</button>
          </div>
        )
    }
    
  }

  return (
    <nav className="row">
      <div className="row">
        <a href="https://taenlen.com/" className="logo">T&#230;nlen<sup>[1]</sup></a> 
        <a href="https://taenlen.com/cells">Cells</a>
        <a href="https://taenlen.com/blog">Blog</a>
        <a href="https://taenlen.com/about">About</a>
      </div>
        {generateButtons()}
    </nav>
  );
};

const msp = ({ auth, ui }) => ({
  loggedIn: ui.isAuthenticated,
  firstName: auth.user ? auth.user.first_name : ''
})

const mdp = dispatch => ({
  logout: () => dispatch(logout())
});

export default connect(msp, mdp)(Nav);


