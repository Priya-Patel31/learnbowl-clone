import React from "react";
import Hero from "../../components/Home/Hero/Hero";
import RectangleSection1 from "../../components/Home/RectangleSection1/RectangleSection1";
import Header from "../Header/Header";
import CardSection from "../../components/Home/CardSection/CardSection";
import RectangleSection2 from "../../components/Home/RectangleSection2/RectangleSection2";
import Carousal from "../../components/Home/Carousal/Carousal";
import RectangleSection3 from "../../components/Home/RectangleSection3/RectangleSection3";
import Footer from "../../components/Footer/Footer";

function Home() {
  return (
    <div className="Home">
      <Header />
      <Hero />
      <RectangleSection1></RectangleSection1>
      <CardSection />
      <RectangleSection2></RectangleSection2>
      <Carousal></Carousal>
      <RectangleSection3></RectangleSection3>
      <Footer></Footer>
    </div>
  );
}

export default Home;
