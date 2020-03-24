import { useState } from 'react';
import axios from 'axios';

const Login = ({ setPage, setLoggedIn }) => {
  const [style, setStyle] = useState();
  const [error, setError] = useState('');
  const [confirmation, setConfirmation] = useState('');
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    username: '',
    email: '',
    password: '',
  });

  const handleChange = e => {
    if (e.target.name === 'confirmation') {
      setConfirmation(e.target.value);
    }
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = e => {
    if (confirmation === formData.password) {
      e.preventDefault();
      axios.post('http://localhost:8000/api/user/create/', formData)
        .then(res => {
          setLoggedIn(true);
          console.log(res);
        });
    } else {
      setError('2. Passwords must match');
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
              style={style}
              onChange={handleChange} />
            <input
              name="last_name"
              type="text"
              placeholder="Last Name"
              value={formData.last_name}
              style={style}
              onChange={handleChange} />
            <input
              name="username"
              type="text"
              placeholder="Username"
              value={formData.username}
              style={style}
              onChange={handleChange} />
            <input
              name="email"
              type="email"
              placeholder="Email"
              value={formData.email}
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
            <input
              name="confirmation"
              type="password"
              placeholder="Confirm Password"
              value={confirmation}
              style={style}
              onChange={handleChange}
            />
            <div className="row">
              <a onClick={() => setPage('login')} className="button" >Return to Log In</a>
              <a className="button" onClick={handleSubmit} style={style}>Register &rarr;</a>
            </div>
            <div className="footnote">{error}</div>
          </form>
        </div>
      </div>
  );
};

export default Login;