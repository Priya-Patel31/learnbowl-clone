import React from "react";
import "./frenchSection6.css";
import { Carousel } from "react-responsive-carousel";

function FrenchSection6() {
  return (
    <div className="frenchSection6-container">
      <img
        className="frenchSection6-image1"
        src="/images/frenchSection6-ellipse.svg"
        alt="ellipse"
      ></img>
      <h3 className="frenchSection6-heading">
        What our <span className="common-color">Students</span> Say
      </h3>
      <div className="frenchSection6-carousal-container">
        <Carousel>
          <div className="frenchSection6-card1-container">
            <div className="frenchSection6-row1-card1">
              <div>
                <img
                  className="frenchSection6-card1-image2"
                  src="/images/star-image.svg"
                  alt="starImage"
                ></img>
                <p className="frenchSection6-description">
                  It seems classes are going well as enjoy these classes and do
                  not miss any sessions. Problem solving is also really
                  satistfactory and the work given is also adequate and fun to
                  do. I would recommend Learnbowl for all courses they offer.
                </p>
              </div>

              <div className="frenchSection6-details-container">
                <div className="frenchSection6-profile-image">
                  <img  src="" alt="image2"></img>
                </div>
                <div className="frenchSection6-info">
                  <h3>Aagam Agrawal</h3>
                  <h6>Ryan International Delhi,Class 6</h6>
                </div>
              </div>
            </div>
            <div></div>
            <div></div>
          </div>
          <div className="frenchSection6-card1-container">
            <div></div>
            <div></div>
            <div></div>
          </div>
          <div className="frenchSection6-card1-container">
            <div></div>
            <div></div>
            <div></div>
          </div>
        </Carousel>
      </div>
    </div>
  );
}

export default FrenchSection6;
