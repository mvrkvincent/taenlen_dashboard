import { useState } from 'react';
import { register, handleErrors } from '../actions/auth_actions';

const Register = ({ setPage, setLoggedIn }) => {

  const development = true;

  const [error, setError] = useState({
    text: '',
    style: null,
  });

  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    username: '',
    email: '',
    password1: '',
    password2: '',
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
      register({ formData, setLoggedIn });
    }
  };

  return (
      <div className="grid">
        <div id="login" className="module">
          <h1 className="title">Register.</h1>
          <form className="column">
            <input
              name="first_name"
              type="text"
              placeholder="First Name"
              value={formData.first_name}
              style={error.style}
              onChange={handleChange} />
            <input
              name="last_name"
              type="text"
              placeholder="Last Name"
              value={formData.last_name}
              style={error.style}
              onChange={handleChange} />
            <input
              name="username"
              type="text"
              placeholder="Username"
              value={formData.username}
              style={error.style}
              onChange={handleChange} />
            <input
              name="email"
              type="email"
              placeholder="Email"
              value={formData.email}
              style={error.style}
              onChange={handleChange} />
            <input
              name="password1"
              type="password"
              placeholder="Password"
              value={formData.password}
              style={error.style}
              onChange={handleChange}
            />
            <input
              name="password2"
              type="password"
              placeholder="Confirm Password"
              value={formData.password2}
              style={error.style}
              onChange={handleChange}
            />
            <div className="row">
              <a onClick={() => setPage('login')} className="button" >Return to Log In</a>
              <a className="button" onClick={handleSubmit} style={error.style}>Register &rarr;</a>
            </div>
            <div className="footnote">{error.text}</div>
          </form>
        </div>
      </div>
  );
};

export default Register;