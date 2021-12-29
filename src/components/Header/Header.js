import React from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import "./header.css";

function Header() {
  // const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className="header-container">
      <div className="header-logo-container">
        <img src="/images/Logo.svg" alt="logo" className="header-logo"></img>
      </div>

      <ul className="header-nav-links">
        
        <Link
          to="/"
          className={
            location.pathname === "/"
              ? "header-nav-list-item active"
              : "header-nav-list-item"
          }
        >
          Home
        </Link>
        <Link to="/french" className={
            location.pathname === "/french"
              ? "header-nav-list-item active"
              : "header-nav-list-item"
          }>
          French
        </Link>
        <Link to="/vedic" className={
            location.pathname === "/vedic"
              ? "header-nav-list-item active"
              : "header-nav-list-item"
          }>
          Vedic maths
        </Link>
        <Link to="/aboutus" className={
            location.pathname === "/aboutus"
              ? "header-nav-list-item active"
              : "header-nav-list-item"
          }>
          About
        </Link>
        <Link to="/contact" className={
            location.pathname === "/contact"
              ? "header-nav-list-item active"
              : "header-nav-list-item"
          }>
          Contact
        </Link>
        {/* <div onClick ={() => {navigate("french")}}>Test</div> */}
      </ul>
    </div>
  );
}

export default Header;
