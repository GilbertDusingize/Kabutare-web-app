
import { Link } from 'react-router-dom';
import React from "react";
import Navbar from "./Navbar.jsx";
import SchoolLogo from "./SchoolLogo.jsx";


function Header() {
  return (
    <header>
     <div className="header-container">
        <SchoolLogo />
        <Navbar /> 
      </div>
    </header>
    
  );
}

export default Header;
