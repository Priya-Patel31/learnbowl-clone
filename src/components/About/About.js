import React from "react";
import Header from "../Header/Header";
import AboutSection1 from "../About/AboutSection1/AboutSection1";
import AboutSection2 from "./AboutSection2/AboutSection2";
import AboutSection3 from "./AboutSection3/AboutSection3";
import AboutSection4 from "./AboutSection4/AboutSection4";
import AboutSection5 from "./AboutSection5/AboutSection5";
import Footer from "../Footer/Footer";

function About() {
  return (
    <div>
        <Header></Header>
        <AboutSection1></AboutSection1>
        <AboutSection2></AboutSection2>
        <AboutSection3></AboutSection3>
        <AboutSection4></AboutSection4>
        <AboutSection5></AboutSection5>
        <Footer></Footer>
    </div>
  );
}

export default About;
