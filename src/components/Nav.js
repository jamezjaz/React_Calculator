import React from 'react';
import '../styles/Nav.css';
import { Link } from 'react-router-dom';

const Nav = () => (
  <nav>
    <h2 style={{ color: 'white' }}>Math Magicians</h2>
    <ul className="nav-links">
      <Link style={{ color: 'white', fontSize: '20px', fontWeight: 'bold' }} to="/">
        <li>Home</li>
      </Link>
      <Link style={{ color: 'white', fontSize: '20px', fontWeight: 'bold' }} to="/calculator">
        <li>Calculator</li>
      </Link>
      <Link style={{ color: 'white', fontSize: '20px', fontWeight: 'bold' }} to="/quotes">
        <li>Quotes</li>
      </Link>
    </ul>
  </nav>
);

export default Nav;
