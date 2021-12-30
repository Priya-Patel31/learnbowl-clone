import React from "react";
import "./aboutSection5.css";

function AboutSection5() {
  return (
    <div className="aboutSection5-container">
      <img
        className="aboutSection5-image1"
        src="/images/aboutSection5-image1.svg"
        alt="image1"
      ></img>
      <div className="aboutSection5-content-container">
        <h3 className="aboutSection5-heading">Explore us on our Socials!</h3>
        <div className="aboutSection5-icons-container">
          <div className="aboutSection5-icon1">
            <img src="/images/abtSection5-facebook-icon.svg" alt="fb-icon"></img>
          </div>
          <div className="aboutSection5-icon1">
            <img src="/images/abtSection5-ig-icon.svg" alt="ig-icon"></img>
          </div>
          <div className="aboutSection5-icon1">
            <img src="/images/abtSection5-linkedin-icon.svg" alt="linkedin"></img>
          </div>
          <div className="aboutSection5-icon1">
            <img src="/images/abtSection5-icon.svg" alt="icon"></img>
          </div>
        </div>
      </div>
      <img
        className="aboutSection5-image2"
        src="/images/aboutSection5-image2.svg"
        alt="image2"
      ></img>
    </div>
  );
}

export default AboutSection5;
