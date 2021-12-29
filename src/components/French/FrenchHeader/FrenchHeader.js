import React from "react";
import "./frenchHeader.css";

function FrenchHeader() {
  return (
    <div className="header-container">
      <div className="header-logo-container">
        <img src="/images/Logo.svg" alt="logo" className="header-logo"></img>
      </div>

      <ul className="header-nav-links">
        <li className="header-nav-list-item">Home</li>
        <li className="header-nav-list-item active">French</li>
        <li className="header-nav-list-item">Vedic maths</li>
        <li className="header-nav-list-item">About</li>
        <li className="header-nav-list-item">Contact</li>
      </ul>
    </div>
  );
}

export default FrenchHeader;
