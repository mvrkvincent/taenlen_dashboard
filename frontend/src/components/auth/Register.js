import React, { useState } from 'react';
import { connect } from 'react-redux';
import { register } from '../../actions/auth_actions';
import { toggleView } from '../../actions/ui_actions';

const Register = ({ errorList, toggleView, register }) => {
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    username: '',
    email: '',
    password: '', 
  });

  const { firstNameError, lastNameError, emailError, usernameError, passwordError, generalError } = errorList;
  const errorStyle = { borderColor: '#EC407A' };

  const style = {
    firstNameError: (firstNameError || generalError) ? errorStyle : null,
    lastNameError: (lastNameError || generalError) ? errorStyle : null,
    emailError: (emailError || generalError) ? errorStyle : null,
    usernameError: (usernameError || generalError) ? errorStyle : null,
    passwordError: (passwordError || generalError) ? errorStyle : null
  };

  const handleChange = e => {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value
      });
  };

  const handleSubmit = e => {
    e.preventDefault();
      register(formData);
  };

  return (

      <div id="auth" className="column">
        <div id="register" className="module">
          <h1 className="title">Register.</h1>
          <form className="column">
            <input
              name="first_name"
              type="text"
              placeholder="First Name"
              style={style.firstNameError}
              value={formData.first_name}
              onChange={handleChange} 
              className="auth-input"/>
            < div className="error">{firstNameError}</div>
            <input
              name="last_name"
              type="text"
              placeholder="Last Name"
              style={style.lastNameError}
              value={formData.last_name}
              onChange={handleChange} 
              className="auth-input"/>
            < div className="error">{lastNameError}</div>
            <input
              name="username"
              type="text"
              placeholder="Username"
              style={style.usernameError}
              value={formData.username}
              onChange={handleChange} 
              className="auth-input"/>
            <div className="error">{usernameError}</div>
            <input
              name="email"
              type="email"
              placeholder="Email"
              style={style.emailError}
              value={formData.email}
              onChange={handleChange} 
              className="auth-input"/>
            <div className="error">{emailError}</div>
            <input
              name="password"
              type="password"
              placeholder="Password"
              style={style.passwordError}
              value={formData.password}
              onChange={handleChange} 
              className="auth-input"/>
            <div className="error">{passwordError}</div>
            <div className="error">{generalError}</div>
            <div className="row submit-row">
              <button type="button" onClick={() => toggleView('login')} className="button" >Return to Log In</button>
              <button className="button" onClick={handleSubmit} >Register &rarr;</button>
            </div>
          </form>
        </div>
      </div>
  );
};

const msp = ({ errors }) => ({
  errorList: {
    firstNameError: errors.first_name,
    lastNameError: errors.last_name,
    emailError: errors.email,
    usernameError: errors.username,
    passwordError: errors.password,
    generalError: errors.non_field_errors
  }
});

const mdp = dispatch => ({
  register: user => dispatch(register(user)),
  toggleView: view => dispatch(toggleView(view))
});

export default connect(msp, mdp)(Register);
