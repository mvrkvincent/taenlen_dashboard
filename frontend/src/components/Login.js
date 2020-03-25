import React, { useState } from 'react';
import { connect } from 'react-redux';
import { login, handleErrors } from '../actions/session_actions';

const Login = props => {
  const { setForm, login } = props;
  const development = true;

  const [error, setError] = useState({
    text: '',
    style: null,
  });
  
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
    if (development) {
      
      handleErrors(setError);
    } else {
      
      login(formData);
    }
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
            value={formData.username}
            style={error.style}
            onChange={handleChange} />
          <input 
            name="password"
            type="password" 
            placeholder="Password"
            value={formData.password}
            style={error.style}
            onChange={handleChange}
            />
          <div className="row">
            <button type="button" onClick={() => setForm('register')} className="button" >Create Account</button>
              <button className="button" onClick={handleSubmit} style={error.style}>Submit &rarr;</button>
          </div>
          <div className="footnote">{error.text}</div>
          </form>
        </div>
      </div>
  );
};

const msp = state => ({
  state: state
})

const mdp = dispatch => ({

  login: user => dispatch(login(user))

});

export default connect(msp, mdp)(Login);

