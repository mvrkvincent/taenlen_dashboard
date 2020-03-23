import { useState } from 'react';

const Login = ({ setPage, setLoggedIn }) => {
  const [style, setStyle] = useState();
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    username: '',
    email: '',
    password: '',
    confirmation: ''
  });

  const handleChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    fetch('http://localhost:8000/api/user/create/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
      .then(res => res.json())
      .then(json => {
        localStorage.setItem('token', json.token);
        setLoggedIn(true);
      });
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
              value={formData.confirmation}
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