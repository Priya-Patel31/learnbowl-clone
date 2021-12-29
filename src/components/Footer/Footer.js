import React from "react";
import "./footer.css";
import {BsInstagram} from 'react-icons/bs';
import {FaFacebookF} from 'react-icons/fa';
import {FaLinkedinIn} from 'react-icons/fa';

function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-headers">
        <img
          className="footerLine-Image"
          src="/images/footerLine.svg"
          alt="line"
        ></img>
        <img className="learnBowl-icon" src="/images/Logo.svg" alt="Logo"></img>
        <img
          className="footerLine-Image"
          src="/images/footerLine.svg"
          alt="line"
        ></img>
      </div>
      <div className="footer-content-container">
        <div className="footer-section1">
          <ul className="footer-list1-elements">
            <li className="footer-list1-item">Blogs</li>
            <li className="footer-list1-item">Terms and condition</li>
            <li className="footer-list1-item">About Us</li>
          </ul>
        </div>
        <div className="footer-section2">
          <div className="footer-list2-elements">
              <div className="footer-icon"><FaFacebookF/></div>
              <div className="footer-icon"><BsInstagram/></div>
              <div className="footer-icon"><FaLinkedinIn/></div>
          </div>
          <div className="footer-email-container">care@learnbowl.com</div>
          <p className="footer-copyright-text">&copy;Copyright Learnbowl</p>
        </div>
        <div className="footer-section3">
          <ul className="footer-list3-elements">
            <li className="footer-list3-item">French</li>
            <li className="footer-list3-item">Vedic Maths</li>
            <li className="footer-list3-item back-to-top-text">
              Back to top ∧
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
