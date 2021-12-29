import React from "react";
import "./CardSection.css";

function CardSection() {
  return (
    <div className="CardSection-container">
      <div className="CardSection-heading">
        What do you want to <span className="Common-color">learn</span> today?
      </div>

      <div className="CardSection-content-container">
        <div className="CardSections CardSection-1">
          <div className="CardSection-1-body">
            <div className="CardSection-1-Content">
              <p className="CardSection-1-heading">
                Learn <span className="Common-color">French</span>
              </p>
              <p className="CardSection-1-subheading">Grades 5-12+</p>
              <div className="CardSection-listItem-container">
                <div className="CardSection-listItem">
                  <img src="/images/Ellipse 17.svg" alt="point" />
                  To access a rich culture
                </div>
                <div className="CardSection-listItem">
                  <img src="/images/Ellipse 17.svg" alt="point" />
                  For an inspiring career
                </div>
                <div className="CardSection-listItem">
                  <img src="/images/Ellipse 17.svg" alt="point" />A widely
                  spoken language
                </div>
                <div className="CardSection-listItem">
                  <img src="/images/Ellipse 17.svg" alt="point" />A zeal for
                  creativity
                </div>
              </div>
              <div className="CardSection-1-texts">
                <img
                  src="/images/Group 81.svg"
                  alt=""
                  className="CardSection-1-workshopText"
                />
              </div>
            </div>
            <div className="Card-1-Image">
              <img
                src="/images/Group (2).svg"
                alt="Tower"
                className="CardSection-1-iconImage"
              ></img>
            </div>
          </div>
          <button className="CardSection-1-btn">
            Register for FREE <img src="" alt="" />
          </button>
        </div>

        {/* Section-2 */}
        <div className="CardSections CardSection-2">
          <div className="CardSection-1-body">
            <div className="CardSection-1-Content">
              <p className="CardSection-1-heading">
                Learn <span className="Common-color">Vedic Maths</span>
              </p>
              <p className="CardSection-1-subheading">Grades 5-12+</p>
              <div className="CardSection-listItem-container">
                <div className="CardSection-listItem">
                  <img src="/images/Ellipse 17.svg" alt="point" />
                  Integrates creative thinking
                </div>
                <div className="CardSection-listItem">
                  <img src="/images/Ellipse 17.svg" alt="point" />
                  Reduces silly mistakes
                </div>
                <div className="CardSection-listItem">
                  <img src="/images/Ellipse 17.svg" alt="point" />
                  Increases concentration
                </div>
                <div className="CardSection-listItem">
                  <img src="/images/Ellipse 17.svg" alt="point" />
                  Helps in quick math
                </div>
              </div>
              <div className="CardSection-1-texts">
                <img
                  src="/images/Group 81.svg"
                  alt=""
                  className="CardSection-1-workshopText"
                />
              </div>
            </div>

            <div className="Card-2-Image">
              <img
                src="/images/CardImage2.svg"
                alt="Tower"
                className="CardSection-2-iconImage"
              ></img>
            </div>
          </div>
          <button className="CardSection-1-btn">
            Register for FREE <img src="" alt="" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default CardSection;
