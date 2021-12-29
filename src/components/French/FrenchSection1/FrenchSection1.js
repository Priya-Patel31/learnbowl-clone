import React from "react";
import "./frenchSection1.css";

function FrenchSection1() {
  return (
    <div className="frenchSection1-container">
      <div className="frenchHeroSection1">
        <div className="FrenchSection-1-row1">
          <p className="frenchHero-text1">Learn from India’s best teachers!</p>
          <h1 className="frenchHero-text2">
            Learn&nbsp;<div className="frenchHero-text3">French</div>&nbsp;the
            fun way with us.Join now!
          </h1>
          <p className="frenchHero-text4">
            Learn French Online: Register for workshop
          </p>
        </div>

        <div className="FrenchSection-1-row2">
          <img
            className="frenchSection1-Image1"
            src="/images/French1Image.svg"
            alt="FrenchImage"
          ></img>
        </div>
      </div>
      <div className="frenchHeroSection2">
        <div className="frenchHeroSection-input-box">
          <p className="frenchHeroSection-heading">
            Register with us to know more
          </p>
          <form className="frenchSection-form">
            <div className="frenchSection-input-box-container">
              <input
                className="input-box"
                type="text"
                placeholder="*Name"
              ></input>
            </div>
            <div className="frenchSection-input-box-container">
              <input
                className="input-box"
                type="email"
                placeholder="*E-mail"
              ></input>
            </div>
            <div className="frenchSection-input-box-container">
              <input
                className="input-box"
                type="number"
                placeholder="*Contact No."
              ></input>
            </div>
            <div className="frenchSection-input-box-container">
              <input
                className="input-box"
                type="text"
                placeholder="*Student Grade"
              ></input>
            </div>
            <div className="frenchSection-input-box-container">
              <input
                className="input-box"
                type="text"
                placeholder="*City"
              ></input>
            </div>
            <div className="frenchSection-2-buttons">
              <button type="button" className="frenchSection2-btn1">
                10th - 12th Sep
              </button>
              <button type="button" className="frenchSection2-btn2">
                10th - 12th Sep
              </button>
            </div>
            <div className="frenchSection2-checkbox-container">
              <input
                classname="frenchSection2-checkbox"
                type="checkbox"
              ></input>
              <label className="frenchSection2-checkbox-content">
                Get Class reminder on whatsapp
              </label>
            </div>
            <button type="submit" className="frenchSection2-submit-btn">
              Register for free
            </button>
            <img  className="frenchSection1-image" src="/images/bastille-day 1.svg" alt="bastille-flag"></img>

          </form>
        </div>
      </div>
    </div>
  );
}

export default FrenchSection1;
