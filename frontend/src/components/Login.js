import React, { useState } from 'react';
import { connect } from 'react-redux';
import { login } from '../actions/session_actions';

const Login = ({ setForm, login, errorList }) => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const { usernameError, passwordError, generalError } = errorList;
  const errorStyle = { borderColor: 'red' };

  const style = {
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
      login(formData);
  };
  
  return (
      <div className="grid">
        <div id="login" className="module">
          <h1 className="title">Log In.</h1>
          <form className="column">
          <input 
            name="username"
            type="text"
            placeholder="Username"
            style={style.usernameError}
            value={formData.username}
            onChange={handleChange} />
          <div className="error">{usernameError}</div>
          <input 
            name="password"
            type="password" 
            placeholder="Password"
            style={style.passwordError}
            value={formData.password}
            onChange={handleChange}
            />
          <div className="error">{passwordError}</div>
          <div className="row">
            <button type="button" onClick={() => setForm('register')} className="button" >Create Account</button>
              <button className="button" onClick={handleSubmit} >Submit &rarr;</button>
          </div>
          <div className="error">{generalError}</div>
          </form>
        </div>
      </div>
  );
};

const msp = ({ errors }) => ({
  errorList: {
    usernameError: errors.username,
    passwordError: errors.password,
    generalError: errors.non_field_errors
  }
});


const mdp = dispatch => ({
  login: user => dispatch(login(user))
});

export default connect(msp, mdp)(Login);

