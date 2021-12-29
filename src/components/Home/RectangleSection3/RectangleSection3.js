import React from "react";
import "./rectangleSection3.css";

function RectangleSection3() {
  return (
    <div className="rectangleSection3-container">
      <p className="rectangleSection3-header">What Role Models Say</p>
      <div className="rectangleSection3-content">
        <img
          className="quotesImage1"
          src="/images/rectangle3quote_start.svg"
          alt="quote"
        ></img>
        <p className="rectangleSection3-sub-content">
          Education is the most Powerful Weapon which you can use to change the
          world.
        </p>
        <div className="rectangleSection3-signature">-APJ. Abdul Kalam</div>
        <button className="rectangleSection3-btn">Browse Courses</button>
        <img
          className="quotesImage2"
          src="/images/rectangle3_end_quote.svg"
          alt="quote"
        ></img>
        <img  className="abdulKalamImage" src="/images/AbdulKalam.svg" alt=""></img>
       
      </div>
    </div>
  );
}

export default RectangleSection3;
