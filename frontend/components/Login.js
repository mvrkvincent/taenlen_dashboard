import { useState, useEffect } from 'react';
import { login, fetchUser } from '../actions/auth_actions';

const Login = ({ setPage, setLoggedIn }) => {
  const [style, setStyle] = useState();
  const [error, setError] = useState('');
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
    login({formData, setLoggedIn});
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
            style={style}
            onChange={handleChange} />
          <input 
            name="password"
            type="password" 
            placeholder="Password"
            value={formData.password}
            style={style}
            onChange={handleChange}
            />
          <div className="row">
            <a onClick={() => setPage('register')} className="button" >Create Account</a>
              <a className="button" onClick={handleSubmit}>Submit &rarr;</a>
          </div>
          <div className="footnote">{error}</div>
          </form>
        </div>
      </div>
  );
};

export default Login;

