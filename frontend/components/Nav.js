
const Nav = ({ loggedIn, setLoggedIn }) => {

  const handleLogOut = e => {
    e.preventDefault();
    localStorage.removeItem('token');
    setLoggedIn(false);
  };
  
  const logOut = loggedIn ? <a onClick={handleLogOut} className="button">Log Out</a> : ''

  return (

    <nav>
      <div className="row">
        <a href="/" className="logo">T&#230;nlen<sup>[1]</sup></a> 
        <a href="/sheets">Sheets</a>
        <a href="/blog">Blog</a>
        <a href="/about">About</a>
      </div>
      <div className="row">
        {logOut}
        {/* <a href="/dashboard" className="button">Dashboard</a> */}
      </div>
    </nav>
  );
};

export default Nav;