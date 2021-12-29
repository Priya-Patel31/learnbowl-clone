import "./App.css";
import {Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import French from "./components/French/French";
import Vedic from "./components/Vedic/Vedic";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";


function App() {
  return (
    <div className="App">
     
        <Routes>
          <Route path="/" element={<Home></Home>}> </Route>
          <Route path="/french" element={<French></French>}></Route>
          <Route path="/vedic" element={<Vedic></Vedic>}></Route>
          <Route path="/aboutus" element={<About></About>}></Route>
          <Route path="/contact" element={<Contact></Contact>}></Route>
        </Routes>
    </div>
  );
}

export default App;
