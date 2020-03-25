import React from 'react';
import { connect } from 'react-redux';
import { logout } from '../actions/session_actions';

const Nav = ({ loggedIn, logout }) => {

  const logoutButton = loggedIn ? <button className="logout_button" onClick={logout}>Log Out</button> : '';

  return (

    <nav>
      <div className="row">
        <a href="https://taenlen.com/" className="logo">T&#230;nlen<sup>[1]</sup></a> 
        <a href="https://taenlen.com/sheets">Sheets</a>
        <a href="https://taenlen.com/blog">Blog</a>
        <a href="https://taenlen.com/about">About</a>
      </div>
      <div className="row">
        {logoutButton}
        <button className="dash_button">Dashboard</button>
      </div>
    </nav>
  );
};

const msp = state => ({
  loggedIn: state.session.isAuthenticated
})

const mdp = dispatch => ({
  logout: () => dispatch(logout())
});

export default connect(msp, mdp)(Nav);


