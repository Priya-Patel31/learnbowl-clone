import React from "react";
import "./carousal.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function Carousal() {
  return (
    <div className="carousal-container">
      <div className="carousal-header">
        <p className="carousal-heading">Our <span className="common-color">Success Stories</span></p>
      </div>
      <div className="carousal-wrapper">
        <Carousel 
          infiniteLoop
          showThumbs={false}
          showStatus={false}
          showArrows={false}
        
          
        >
          <div className="carousal-card1">
            <img
              className="pink-start-quote"
              src="/images/pink_start_quotes.svg"
              alt="quotes"
            ></img>
            <img
              className="pink-end-quote"
              src="/images/pink_end_quotes.svg"
              alt="quotes"
            ></img>
            <p className="carousal-content">
              Being a language teacher myself, I highly recommend that students
              sign up for this French workshop because it expands the students’
              horizons. It teaches them how to communicate and build
              relationships, and also about various cultures. This is very
              important to grow holistically. They have started understanding
              and appreciating literature more. I definitely recommend and urge
              all students to give this a go.
            </p>

            <img
              src="/images/Ellipse 27.svg"
              alt="pink-ellipse"
              className="carousal-pink-ellipse"
            ></img>
            <div className="teacher-detail-container">
              <p className="teacher-name">Ms. Asha Jaisingh</p>
              <p className="teacher-detail">Teacher</p>
              <p className="teacher-detail">St. Mary’s Kolkata</p>
            </div>
          </div>

          <div className="carousal-card1">
            <img
              className="pink-start-quote"
              src="/images/orange_start_quotes.svg"
              alt="quotes"
            ></img>
            <img
              className="pink-end-quote"
              src="/images/orange_end_quotes.svg"
              alt="quotes"
            ></img>
            <p className="carousal-content">
              Our students loved the workshops and we received great feedback
              from students and their parents. The sessions were highly
              interactive with instant doubt-clearing. We highly recommend this
              course - especially if you are a school student because a foreign
              language opens up a world of opportunities.
            </p>
            <img
              src="/images/Ellipse 27 (1).svg"
              alt="pink-ellipse"
              className="carousal-orange-ellipse"
            ></img>
            <div className="teacher-detail-container">
              <p className="teacher-name">Ms. Radhika Lobo</p>
              <p className="teacher-detail">Principal</p>
              <p className="teacher-detail">DPS Bangalore</p>
            </div>
          </div>

          <div className="carousal-card1">
            <img
              className="pink-start-quote"
              src="/images/green_start_quotes.svg"
              alt="quotes"
            ></img>
            <img
              className="pink-end-quote"
              src="/images/green_end_quotes.svg"
              alt="quotes"
            ></img>
            <p className="carousal-content">
              In this day and age, it is very important to adapt. French is
              growing to be one of the most commonly spoken languages in the
              world and it is very important for students to learn this
              language. LearnBowl approached our students and we have only
              received great feedback ever since. Our students find these
              classes interactive and found many key takeaways. The team has
              also been very supportive throughout. We look forward to many more
              such workshops for our students.
            </p>
            <img
              src="/images/Ellipse 27 (2).svg"
              alt="green-ellipse"
              className="carousal-green-ellipse"
            ></img>
            <div className="teacher-detail-container">
              <p className="teacher-name">Mr. Ram Goarty</p>
              <p className="teacher-detail">Principal</p>
              <p className="teacher-detail">DPS Mumbai</p>
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  );
}

export default Carousal;
