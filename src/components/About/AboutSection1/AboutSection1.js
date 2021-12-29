import React from "react";
import "./aboutSection1.css";

function AboutSection1() {
  return (
    <div className="aboutSection1-container">
      <div className="aboutSection1-card1-container">
        <img
          className="aboutSection1-image1"
          src="/images/about-image1.svg"
          alt="image1"
        ></img>
        <img
          className="aboutSection1-image2"
          src="/images/about-image2.svg"
          alt="image2"
        ></img>

        <h3 className="aboutSection1-card1-heading">About Us</h3>
        <p className="aboutSection1-card1-content">
          LearnBowl is an Ed-tech company, driven by the incentive to expedite
          the learning process in a holistic, student-friendly environment. With
          our primary focus being on extra-curricular learning, we believe in
          enriching our students’ academic persona. To accomplish this, we have
          a seasoned faculty on board.<br></br><br></br>
           With the teaching of the French language
          being the first of our many initiatives, come join us on a journey to
          accomplish the ‘out of the ordinary.
        </p>
      </div>
      <div className="aboutSection1-card2-container"></div>
    </div>
  );
}

export default AboutSection1;
