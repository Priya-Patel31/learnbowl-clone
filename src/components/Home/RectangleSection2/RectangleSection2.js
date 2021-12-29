import React from "react";
import "./rectangleSection2.css";

function RectangleSection2() {
  return (
    <div>
      <div className="rectangleSection2-container">
        <div className="rectangleSection2-content">
          <div className="rectangleSection2-heading">
            <p className="rectangleSection2-heading1">
              LearnBowl:<span className="common-color"> A Holistic  Approach</span>
             
            </p>
            <p className="rectangleSection2-text1">
              Every individual wants to succeed academically as well as in life.
              And this can only be accomplished through extracurricular
              experiences and learning. At LearnBowl, we provide a solid
              foundation for students where we try to engage the learner's
              intellect, spirit, and body in the learning process and make our
              students ready to take on the future!
            </p>
            <p className="rectangleSection2-text2">Amazing, right? Join your peers from school and hop onto the French bandwagon!</p>
            <button className="rectangleSection2-btn">Explore Courses<img src="" alt=""></img></button>
            </div>
        </div>
        <div className="rectangleSection2-ImageContainer"></div>
        <img
          src="/images/Group 333.svg"
          alt=""
          className="rectangleSection2-Image"
        ></img>
      </div>
    </div>
  );
}

export default RectangleSection2;
