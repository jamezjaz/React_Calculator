import React from 'react';
import '../styles/Nav.css';
import { Link } from 'react-router-dom';

const Nav = () => (
  <nav>
    <h2>Math Magicians</h2>
    <ul className="nav-links">
      <Link to="/">
        <li>Home</li>
      </Link>
      <Link to="/calculator">
        <li>Calculator</li>
      </Link>
      <Link to="/quotes">
        <li>Quotes</li>
      </Link>
    </ul>
  </nav>
);

export default Nav;
