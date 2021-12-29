import React from "react";
import { AiFillStar } from "react-icons/ai";
import "./aboutSection2.css";

function AboutSection2() {
  return (
    <div className="aboutSection2-container">
      <h3 className="aboutSection2-heading">
        What <span className="common-color">LearnBowl</span> Offers
      </h3>
      <div className="aboutSection2-icons-container">
        <div className="aboutSection2-icon1">
          <img src="/images/aboutSection2-card1.svg" alt="card1"></img>
          <div className="aboutSection2-card1-content-container">
            <h4>200+</h4>
            <p>Happy Students</p>
          </div>
        </div>
        <div  className="aboutSection2-icon1">
          <img src="/images/aboutSection2-card2.svg" alt="card1"></img>
          <div className="aboutSection2-card1-content-container">
            <h4>100+</h4>
            <p>Topics</p>
          </div>
        </div>
        <div  className="aboutSection2-icon1">
          <img src="/images/aboutSection2-card3.svg" alt="card1"></img>
          <div className="aboutSection2-card1-content-container">
            <h4>3000+</h4>
            <p>Teaching Hours</p>
          </div>
        </div>
        <div  className="aboutSection2-icon1">
          <img src="/images/aboutSection2-card4.svg" alt="card1"></img>
          <div className="aboutSection2-card1-content-container">
            <h4>4.5<AiFillStar className="fill-star"></AiFillStar></h4>
            <p>User Rating</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutSection2;
