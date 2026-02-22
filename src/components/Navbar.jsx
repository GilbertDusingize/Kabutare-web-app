import { Link } from 'react-router-dom';
import React from "react";

function Navbar({ isOpen, setIsOpen }) {
  return (
    <nav className={`navbar ${isOpen ? 'active' : ''}`}>
      <ul>
        {/* We call setIsOpen(false) so the menu closes when a link is clicked */}
        <li><Link to="/" onClick={() => setIsOpen(false)}>Home</Link></li>
        <li><Link to="/about" onClick={() => setIsOpen(false)}>About</Link></li>
        <li><Link to="/academics" onClick={() => setIsOpen(false)}>Academics</Link></li>
        <li><Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;