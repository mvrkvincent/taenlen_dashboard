import React, { useState } from 'react';
import { connect } from 'react-redux';
import { login } from '../../actions/auth_actions';
import { toggleView } from '../../actions/ui_actions';

const Login = ({ errors, toggleView, login, darkStyle }) => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

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
        <div style={darkStyle.module} className="auth module">
          <h1 className="title">Log In.</h1>
          <form className="column">
            <input
              name="username"
              type="text"
              placeholder="Username"
              style={darkStyle.input}
              value={formData.username}
              onChange={handleChange} 
              />
            <div className="error">{errors.username}</div>
            <input
              name="password"
              type="password" 
              placeholder="Password"
              style={darkStyle.input}
              value={formData.password}
              onChange={handleChange}
              />
            <div className="error">{errors.password}</div>
            <div className="error">{errors.non_field_errors}</div>
            <div className="row submit">
              <button style={darkStyle.button} onClick={() => toggleView('register')}>Create Account</button>
              <button style={darkStyle.button} onClick={handleSubmit}>Submit &rarr;</button>
            </div>
            <div className="row submit">
              <button style={darkStyle.button} className="demo" onClick={handleDemo}>Demo</button>
            </div>
          </form>
        </div>
      </div>
  );
};

const msp = ({ errors }) => ({
  errors: errors
});


const mdp = dispatch => ({
  login: user => dispatch(login(user)),
  toggleView: view => dispatch(toggleView(view))
});

export default connect(msp, mdp)(Login);

