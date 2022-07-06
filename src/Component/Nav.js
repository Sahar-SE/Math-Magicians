import React from 'react';
import { Link } from 'react-router-dom';
import '../css/nav.css';

function Nav() {
  return (
    <nav className="navbar">
      <div>
        <h1>Math Magicians</h1>
      </div>
      <div className="nav-item">
        <Link className="links" to="/">Home</Link>
        <Link className="links" to="/calculator">Calculator</Link>
        <Link className="links" to="/quote">Quote</Link>
      </div>
    </nav>
  );
}

export default Nav;
