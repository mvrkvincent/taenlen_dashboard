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

  const handleDemo = e => {
    e.preventDefault();
    const user = 'DemoUser';
    const pass = 'DemoUser2020';
    login({ username: user, password: pass });
  };
  
  return (
      <div id="auth" className="column"> 
        <div className="auth module">
          <h1 className="title">Log In.</h1>
          <form className="column">
            <input 
              name="username"
              type="text"
              placeholder="Username"
              style={style.usernameError}
              value={formData.username}
              onChange={handleChange} 
              />
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
            <div className="error">{generalError}</div>
            <div className="row submit">
              <button onClick={() => toggleView('register')}>Create Account</button>
              <button onClick={handleSubmit}>Submit &rarr;</button>
            </div>
            <div className="row submit">
              <button className="demo" onClick={handleDemo}>Demo</button>
            </div>
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
  login: user => dispatch(login(user)),
  toggleView: view => dispatch(toggleView(view))
});

export default connect(msp, mdp)(Login);

