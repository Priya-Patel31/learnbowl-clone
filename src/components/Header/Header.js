import React from "react";
import {Link} from "react-router-dom"
import "./header.css";

function Header() {
  return (
    <div className="header-container">
      <div className="header-logo-container">
          <img src="/images/Logo.svg"
            alt="logo" className="header-logo"></img>
        </div>
        
        <ul className="header-nav-links">
          <Link to="/" className="header-nav-list-item ">Home</Link>
          <Link to="/french" className="header-nav-list-item">French</Link>
          <Link to="/vedic" className="header-nav-list-item">Vedic maths</Link>
          <Link to="/aboutus" className="header-nav-list-item">About</Link>
          <Link to="/contact" className="header-nav-list-item">Contact</Link>
        </ul>
       
     
    </div>
  );
}

export default Header;
