import React, { useState } from 'react';

const Nav = () => {
  const [style, setStyle] = useState();

  const handleClick = () => {
    setStyle({ borderColor: 'red' });
  };

  return (

    <nav>
      <div className="section">
        <a href="/" className="logo">&#230;<sup>[1]</sup></a> 
        <a href="/ledger">Sheets</a>
        <a href="/blog">Blog</a>
        <a href="/about">About</a>
      </div>
      <div className="section">
        <a className="auth" onClick={() => handleClick()} style={style}>Log In</a>
        <a className="auth" onClick={() => handleClick()} style={style}>Sign Up</a>
      </div>
    </nav>

  );
};

export default Nav;