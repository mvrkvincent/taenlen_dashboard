import React, { useState } from 'react';
import { connect } from 'react-redux';
import { register } from '../../actions/auth_actions';
import { toggleView } from '../../actions/ui_actions';

const Register = ({ errors, toggleView, register, darkStyle }) => {
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    username: '',
    email: '',
    password: '', 
  });

  const error = { borderColor: '#EC407A' };

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
              name="first_name"
              type="text"
              placeholder="First Name"
              style={darkStyle.input}
              value={formData.first_name}
              onChange={handleChange} 
            />
            < div className="error">{errors.first_name}</div>
            <input
              name="last_name"
              type="text"
              placeholder="Last Name"
              style={darkStyle.input}
              value={formData.last_name}
              onChange={handleChange} 
            />
            < div className="error">{errors.last_name}</div>
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
              name="email"
              type="email"
              placeholder="Email"
              style={darkStyle.input}
              value={formData.email}
              onChange={handleChange} 
            />
            <div className="error">{errors.email}</div>
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
              <button style={darkStyle.button} onClick={() => toggleView('login')}>Return to Log In</button>
              <button style={darkStyle.button} onClick={handleSubmit} >Register &rarr;</button>
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
  register: user => dispatch(register(user)),
  toggleView: view => dispatch(toggleView(view))
});

export default connect(msp, mdp)(Register);
