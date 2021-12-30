import React from "react";
import "./aboutSection3.css";

function AboutSection3() {
  return (
    <div className="aboutSection3-container">
      <div className="aboutSection3-image-container">
        <img src="/images/aboutSection3-image1.svg" alt="image1"></img>
      </div>
      <div className="aboutSection3-content-container">
        <img src="/images/aboutSection3-circle4.svg" alt="image1"></img>
        <div className="aboutSection3-subcontainer">
          <h3>Our Mission</h3>
          <p>
            Our foremost aim is to garnish our students’ personalities with
            extra-curricular & experiential skills. We’re passionate about
            granting everyone the opportunity to learn and explore activities
            outside school, in the most personalized way possible.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutSection3;
