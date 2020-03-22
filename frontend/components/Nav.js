import React, { useState } from 'react';

const Nav = () => {
  const [style, setStyle] = useState();

  return (

    <nav>
      <div className="section">
        <a href="/" className="logo">&#230;.</a> 
        <a href="/ledger">Ledger</a>
        <a href="/blog">Blog</a>
        <a href="/about">About</a>
      </div>
      <div className="section">
        <a className="auth" onClick={() => setStyle({borderColor: 'red'})} style={style}>Log In</a>
        <a className="auth" onClick={() => setStyle({ borderColor: 'red' })} style={style}>Sign Up</a>
      </div>
    </nav>

  );
};

export default Nav;