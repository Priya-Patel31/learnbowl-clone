import React from "react";
import "./frenchSection4.css";
import { AiFillStar } from "react-icons/ai";

function FrenchSection4() {
  return (
    <div className="frenchSection4-container">
      <div className="frenchSection4-header-box">
        <h3 className="frenchSection4-heading">
          Why choose <span className="common-color">Us?</span>
        </h3>
      </div>
      <div className="frenchSection4-content">
        <div className="frenchSection4-col1">
          <div className="frenchSection4-cards-container">
            <div className="frenchSection4-group1-container">
              <div className="frenchSection4-card1">
                <h1 className="frenchSection4-header">5000+</h1>
                <h6 className="frenchSection4-text">Happy Students</h6>
              </div>
              <div className="frenchSection4-card2">
                <h1 className="frenchSection4-header">20000+</h1>
                <h6 className="frenchSection4-text">Teaching Hours</h6>
              </div>
            </div>
            <div className="frenchSection4-group2-container">
              <div className="frenchSection4-card3">
                <h1 className="frenchSection4-header">100+</h1>
                <h6 className="frenchSection4-text">Topics</h6>
              </div>
              <div className="frenchSection4-card4">
                <h1 className="frenchSection4-header">
                  4.5<AiFillStar className="aifillstar"></AiFillStar>
                </h1>
                <h6 className="frenchSection4-text">User Rating</h6>
              </div>
            </div>
          </div>
        </div>

        <div className="frenchSection4-col2">
          <img src="/images/frenchSection4Quote.svg" alt="quotes"></img>
        </div>
      </div>
    </div>
  );
}

export default FrenchSection4;
