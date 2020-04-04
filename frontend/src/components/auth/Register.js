import React, { useState } from 'react';
import { connect } from 'react-redux';
import { register } from '../../actions/auth_actions';
import { toggleView } from '../../actions/ui_actions';

const Register = ({ errorList, toggleView, register, darkStyle }) => {
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    username: '',
    email: '',
    password: '', 
  });

  const { firstNameError, lastNameError, emailError, usernameError, passwordError, generalError } = errorList;
  const error = { borderColor: '#EC407A' };

  const errorStyle = {
    fError: (firstNameError || generalError) ? error : null,
    lErrr: (lastNameError || generalError) ? error : null,
    eError: (emailError || generalError) ? error : null,
    uError: (usernameError || generalError) ? error : null,
    pError: (passwordError || generalError) ? error : null
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
        <div style={darkStyle.module} className="auth module">
          <h1 className="title">Register.</h1>
          <form className="column">
            <input
              style={darkStyle.input}
              name="first_name"
              type="text"
              placeholder="First Name"
              style={errorStyle.fError}
              value={formData.first_name}
              onChange={handleChange} 
            />
            < div className="error">{firstNameError}</div>
            <input
              style={darkStyle.input}
              name="last_name"
              type="text"
              placeholder="Last Name"
              style={errorStyle.lError}
              value={formData.last_name}
              onChange={handleChange} 
            />
            < div className="error">{lastNameError}</div>
            <input
              style={darkStyle.input}
              name="username"
              type="text"
              placeholder="Username"
              style={errorStyle.uError}
              value={formData.username}
              onChange={handleChange} 
            />
            <div className="error">{usernameError}</div>
            <input
              style={darkStyle.input}
              name="email"
              type="email"
              placeholder="Email"
              style={errorStyle.eError}
              value={formData.email}
              onChange={handleChange} 
            />
            <div className="error">{emailError}</div>
            <input
              style={darkStyle.input}
              name="password"
              type="password"
              placeholder="Password"
              style={errorStyle.pError}
              value={formData.password}
              onChange={handleChange} 
            />
            <div className="error">{passwordError}</div>
            <div className="error">{generalError}</div>
            <div className="row submit">
              <button style={darkStyle.button} onClick={() => toggleView('login')}>Return to Log In</button>
              <button style={darkStyle.button} onClick={handleSubmit} >Register &rarr;</button>
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
