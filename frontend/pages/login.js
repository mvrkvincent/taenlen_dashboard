import React, { useState } from 'react';
import PageTemplate from '../components/PageTemplate';

const Login = () => {
  const [style, setStyle] = useState();
  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState('');

  const handleChange = e => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value
    });
  };

  const handleAccessDenied = () => {
    setStyle({ borderColor: 'red' });
    setError('2. Beta Coming April 2020');
  };

  const handleSubmit = () => {
    console.log(credentials);
  };

  return (
    <PageTemplate>
      <div className="grid">
        <div id="login" className="module">
          <h1 className="title">Log In.</h1>
          <form className="column">
          <input 
            name="email"
            type="email"
            placeholder="Email"
            value={credentials.email}
            onChange={handleChange} />
          <input 
            name="password"
            type="password" 
            placeholder="Password"
            onChange={handleChange}
            value={credentials.password}
            />
          <div className="row">
            <a className="button" onClick={handleAccessDenied} style={style}>Create Account</a>
              <a className="button" onClick={handleSubmit}>Submit &rarr;</a>
          </div>
          <div className="footnote">{error}</div>
          </form>
        </div>
      </div>
    </PageTemplate>
  );
};

export default Login;