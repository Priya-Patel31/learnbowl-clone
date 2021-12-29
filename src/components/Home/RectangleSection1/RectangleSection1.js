import React from "react";
import "./rectangleSection1.css";

function RectangleSection1() {
  return (
    <div>
      <div className="RectangleSection-container">
        <div className="RectangleSection-heading">
          Working Process and Benefits
        </div>
        <img
          className="RectangleSection-heading-image1"
          src="/images/Group 371.svg"
          alt="lineImage">
        </img>
        <div className="RectangleSection-Icons-container">
          <div className="RectangleSection-Icon section-icon1">
            <img src="/images/Group 315.svg" alt="lottieIcon1" className="lottieIcon1"></img>
            <p className="lottieIcon1-Desc">Find Course</p>           
          </div>
          <div className="RectangleSection-Icon section-icon2">
            <img src="/images/Group 314.svg" alt="lottieIcon2" className="lottieIcon2"></img>
            <p className="lottieIcon2-Desc">Register for Workshop</p>
          </div>
          <div className="RectangleSection-Icon section-icon3">
            <img src="/images/Group 313.svg" alt="lottieIcon3" className="lottieIcon3"></img>
            <p className="lottieIcon3-Desc">Get Certified</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RectangleSection1;
