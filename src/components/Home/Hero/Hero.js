import React from "react";
import "./hero.css";
import { GiOpenBook } from "react-icons/gi";
import { IoIosArrowRoundDown } from "react-icons/io";
function Hero() {
  return (
    <div className="hero-container">
      <img
        src="/images/line1.svg"
        alt="line1"
        className="hero-line1-image"
      ></img>
      <img
        src="/images/line2.svg"
        alt="line2"
        className="hero-line2-image"
      ></img>
      <img
        src="/images/line3.svg"
        alt="line3"
        className="hero-line3-image"
      ></img>
      <img
        src="/images/line4.svg"
        alt="line4"
        className="hero-line4-image"
      ></img>

      <div className="hero-section1">
        <div className="hero-section1-subheader">
          <GiOpenBook />
          <p className="hero-section1-text1">Best way to learn from anywhere</p>
        </div>
        <h1 className="hero-section1-text2">
          The heaven for holistic Learning
        </h1>
        <p className="hero-section1-text3">
          Learn your desired language in the most fun way! From anywhere,
          anytime!
        </p>
        <button className="hero-section1-button">
          Get Started
          <IoIosArrowRoundDown className="section1-arrowDown" />
        </button>
      </div>
      <div className="hero-section2">
        <img src="/images/HeroImage.svg" alt="hero-image"></img>
      </div>
      <div className="hero-section3">
        <ul className="hero-section-points-container">
          <div className="hero-section-column-1">
            <div className="hero-section3-list">
              {/* point1 */}
              <li className="hero-list-content1">
                <div className="hero-content-container">
                  <div className="hero-list-serial-no section3-serial-no1">
                    01
                  </div>
                  <div className="hero-list-content">
                    <p className="hero-list-content1-subheading1">250+</p>
                    <p className="hero-list-content1-subheading2">
                      Happy Students
                    </p>
                  </div>
                </div>
              </li>
            </div>

            <div className="hero-section3-list">
              <li className="hero-list-content1">
                <div className="hero-content-container">
                  <div className="hero-list-serial-no section3-serial-no2">
                    02
                  </div>
                  <div className="hero-list-content">
                    <p className="hero-list-content1-subheading1">100+</p>
                    <p className="hero-list-content1-subheading2">Topics</p>
                  </div>
                </div>
              </li>
            </div>
          </div>

          <div className="hero-section-column-2">
            <div className="hero-section3-list">
              <li className="hero-list-content1">
                <div className="hero-content-container">
                  <div className="hero-list-serial-no section3-serial-no3">
                    03
                  </div>
                  <div className="hero-list-content">
                    <p className="hero-list-content1-subheading1">3000+</p>
                    <p className="hero-list-content1-subheading2">
                      Teaching Hours
                    </p>
                  </div>
                </div>
              </li>
            </div>

            <div className="hero-section3-list">
              <li className="hero-list-content1">
                <div className="hero-content-container">
                  <div className="hero-list-serial-no section3-serial-no4">
                    04
                  </div>
                  <div className="hero-list-content">
                    <p className="hero-list-content1-subheading1">4.5</p>
                    <p className="hero-list-content1-subheading2">
                      User Rating
                    </p>
                  </div>
                </div>
              </li>
            </div>
          </div>
        </ul>
      </div>
    </div>
  );
}

export default Hero;
