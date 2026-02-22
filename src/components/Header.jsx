
import React, { useState } from "react";
import Navbar from "./Navbar.jsx";
import SchoolLogo from "./SchoolLogo.jsx";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header>
      <div className="header-container">
        <SchoolLogo />
        
        {/* The Hamburger Button */}
        <button 
          className={`menu-toggle ${isOpen ? 'is-active' : ''}`} 
          onClick={toggleMenu}
          aria-label="Toggle navigation"
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>

        {/* Pass the state to Navbar */}
        <Navbar isOpen={isOpen} setIsOpen={setIsOpen} /> 
      </div>
    </header>
  );
}

export default Header;
