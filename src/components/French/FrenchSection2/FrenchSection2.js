import React from "react";
import "./frenchSection2.css";

function FrenchSection2() {
  return (
    <div className="french-section2-container">
      <img
        className="frenchSection2-header-image"
        src="/images/Bonjour.svg"
        alt="bonjour"
      ></img>
      <h1 className="frenchSection-2-heading">
        Why <span className="common-color">Learn</span> French?
      </h1>
      <div className="frenchSection2-card-container">
        <div className="frenchSection2-card1">
          <div className="frenchSection2-card1-image1">
            <img src="/images/frenchSection2-image1.svg" alt="image1"></img>
          </div>
          <div className="frenchSection2-card1-container">
            <h4 className="frenchSection2-card1-text1">
              Boosts
              <span className="frenchScetion2-text12 common-color">
                Confidence
              </span>
            </h4>
          </div>
        </div>

        <div className="frenchSection2-card1">
          <div className="frenchSection2-card1-image1">
            <img src="/images/frenchSection2-image2.svg" alt="image2"></img>
          </div>
          <div className="frenchSection2-card1-container">
            <h4 className="frenchSection2-card1-text1">
              Facilitates overall
              <span className="frenchScetion2-text12 common-color">
                Personality Development
              </span>
            </h4>
          </div>
        </div>

        <div className="frenchSection2-card1">
          <div className="frenchSection2-card1-image1">
            <img src="/images/frenchSection2-image3.svg" alt="image3"></img>
          </div>
          <div className="frenchSection2-card1-container">
            <h4 className="frenchSection2-card1-text1">
              Enhances
              <span className="frenchScetion2-text12 common-color">
                creative thinking
              </span>
            </h4>
          </div>
        </div>

        <div className="frenchSection2-card1">
          <div className="frenchSection2-card1-image1">
            <img src="/images/frenchSection2-image4.svg" alt="image1"></img>
          </div>
          <div className="frenchSection2-card1-container">
            <h4 className="frenchSection2-card1-text1">
              Harnesses
              <span className="frenchScetion2-text12 common-color">
              decision making
              </span>
            </h4>
          </div>
        </div>

        <div className="frenchSection2-card1">
          <div className="frenchSection2-card1-image1">
            <img src="/images/frenchSection2-image5.svg" alt="image1"></img>
          </div>
          <div className="frenchSection2-card1-container">
            <h4 className="frenchSection2-card1-text1">
            Develops
              <span className="frenchScetion2-text12 common-color">
              networking skills
              </span>
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FrenchSection2;
