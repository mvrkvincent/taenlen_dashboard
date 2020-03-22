import Router from 'next/router';

const Nav = () => {

  const handleRedirect = () => {
    Router.push(`/login`);
  };

  return (

    <nav>
      <div className="row">
        <a href="/" className="logo">T&#230;nlen<sup>[1]</sup></a> 
        <a href="/sheets">Sheets</a>
        <a href="/blog">Blog</a>
        <a href="/about">About</a>
      </div>
      <div className="row">
        <a onClick={handleRedirect} className="button">Dashboard</a>
      </div>
    </nav>
  );
};

export default Nav;