import React from 'react';
import '../index.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">RouletteX</div>
      <ul className="navbar-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#features">Features</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
