import React from "react";
import Header from "../Header/Header";
import FrenchSection1 from "../../components/French/FrenchSection1/FrenchSection1";
import FrenchSection2 from "./FrenchSection2/FrenchSection2";
import FrenchSection4 from "./FrenchSection4/FrenchSection4";
import FrenchSection5 from "./FrenchSection5/FrenchSection5";
import FrenchSection6 from "./FrenchSection6/FrenchSection6";
import Footer from "../Footer/Footer";


function French() {
  return (
    <div>
      <Header></Header>
      <FrenchSection1></FrenchSection1>
      <FrenchSection2></FrenchSection2>
      <FrenchSection4></FrenchSection4>
      <FrenchSection5></FrenchSection5>
      <FrenchSection6></FrenchSection6>
      <Footer></Footer>
     
    </div>
  );
}

export default French;
