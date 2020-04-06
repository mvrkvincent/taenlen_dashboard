import React from 'react';
import { connect } from 'react-redux';
import { toggleDarkMode } from '../actions/ui_actions';

const Footer = ({ darkStyle, darkMode, toggleDarkMode }) => {

  let darkButton = <i className="far fa-moon" />;

  if (darkMode) {
    darkButton = <i className="fas fa-moon" />;
  }

  return(
    <footer className="column">
      <div className="dark-mode">
        <button 
          style={darkStyle.logout} 
          onClick={() => toggleDarkMode()} 
          className="logout">{darkButton}</button>
      </div>
      <div className="footnote">1.  <i>noun, welsh [taen·llen]</i>: A spreadsheet.</div>
    </footer>
  );
};

const msp = ({ ui }) => ({
  darkMode: ui.darkMode
});

const mdp = dispatch => ({
  toggleDarkMode: () => dispatch(toggleDarkMode())
});

export default connect(msp, mdp)(Footer);