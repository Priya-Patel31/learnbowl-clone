import React from "react";
import Header from "../Header/Header";
import AboutSection1 from "../About/AboutSection1/AboutSection1";
import AboutSection2 from "./AboutSection2/AboutSection2";
import AboutSection3 from "./AboutSection3/AboutSection3";

function About() {
  return (
    <div>
        <Header></Header>
        <AboutSection1></AboutSection1>
        <AboutSection2></AboutSection2>
        <AboutSection3></AboutSection3>
    </div>
  );
}

export default About;
