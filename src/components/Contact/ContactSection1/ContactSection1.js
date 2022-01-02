import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import "./contactSection1.css";

function ContactSection1() {
  return (
    <div className="contact-container">
      <div className="contact-detail-content-container">
        <h3>Contact Us</h3>
        <p>
          Fill up the form and our team will get back to you shortly or use any
          of the following ways to reach us.
        </p>
        <div className="contact-details-container">
          <div className="contact-deat-col1">
            <FaPhoneAlt className="contact-deat-col1-row1"></FaPhoneAlt>
          </div>
          <div className="contact-deat-col2">
            <div className="contact-deat-col2-row1">+917304074610</div>
            <div className="contact-deat-col2-row2">Mon to Sat 9am to 9pm</div>
          </div>
        </div>
      </div>
      <div className="contact-form-container"></div>
    </div>
  );
}

export default ContactSection1;
