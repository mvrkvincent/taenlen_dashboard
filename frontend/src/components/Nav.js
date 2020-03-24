import React from 'react';
import { logout } from '../actions/auth_actions';

const Nav = ({ loggedIn, setLoggedIn }) => {

  const style = {
    borderColor: '#2ED9EB'
  };

  const handleLogOut = e => {
    e.preventDefault();
    logout();
    setLoggedIn(false);
  };
  
  const logOut = loggedIn ? <a onClick={handleLogOut} className="button">Log Out</a> : '';

  return (

    <nav>
      <div className="row">
        <a href="https://taenlen.com/" className="logo">T&#230;nlen<sup>[1]</sup></a> 
        <a href="https://taenlen.com/sheets">Sheets</a>
        <a href="https://taenlen.com/blog">Blog</a>
        <a href="https://taenlen.com/about">About</a>
      </div>
      <div className="row">
        {logOut}
        <a className="button" style={style}>Dashboard</a>
      </div>
    </nav>
  );
};

export default Nav;