import React from "react";
import "../App.css";

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="footer"> {/* Changed to className */}
      <h1 className="footer-title">Kabutare<span>TSS</span></h1>
      <ul className="footer-menus">
        <li className="footer__menus-menu"> <a href="#home">Home</a></li>
        <li className="footer__menus-menu"> <a href="#menus">About</a></li>
        <li className="footer__menus-menu"> <a href="#service">Academics</a></li>
        <li className="footer__menus-menu"> <a href="#about">Online Application</a></li>
        <li className="footer__menus-menu"> <a href="#contact">Contact Us</a></li>
      </ul>
      <div className="footer__divider">
        {/* Removed the nested <p> tag */}
        <p className="footer__copyright">
          Copyright ⓒ {currentYear}. All rights reserved. | Crafted by Gilbert
        </p>
      </div>
    </footer>
  );
}

export default Footer;
