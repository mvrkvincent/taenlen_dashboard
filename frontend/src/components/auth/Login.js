import React, { useState } from 'react';
import { connect } from 'react-redux';
import { login } from '../../actions/auth_actions';
import { toggleView } from '../../actions/ui_actions';

const Login = ({ errorList, toggleView, login }) => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const { usernameError, passwordError, generalError } = errorList;
  const errorStyle = { borderColor: '#EC407A4' };

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
        <div id="auth" className="module">
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
            onChange={handleChange}/>
          <div className="error">{passwordError}</div>
          <div className="row submit-row">
            <button type="button" onClick={() => toggleView('register')} className="button" >Create Account</button>
              <button className="button" onClick={handleSubmit} >Submit &rarr;</button>
          </div>
          <div className="error">{generalError}</div>
          </form>
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
  login: user => dispatch(login(user)),
  toggleView: view => dispatch(toggleView(view))
});

export default connect(msp, mdp)(Login);

