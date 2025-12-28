
import { Link } from "react-router-dom";

// RIGHT (Matches the Route path)
import React from "react";

function Navbar() {
  return (
    <nav className="navbar">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
     <li><Link to="/academics">Academics</Link></li>
       <li><Link to="/online">Online Applications</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/announcements">Announcements</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;