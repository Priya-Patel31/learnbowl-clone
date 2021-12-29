import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Home from "./components/Home/Home";
import Home from "./components/Home/Home";
import French from "./components/French/French";
import Vedic from "./components/Vedic/Vedic";
import About from "./components/About/About";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home></Home>}> </Route>
          <Route path="/french" element={<French></French>}></Route>
          <Route path="/vedic" element={<Vedic></Vedic>}></Route>
          <Route path="/aboutus" element={<About></About>}></Route>
          
        </Routes>
      </BrowserRouter>
      {/* <Home></Home> */}

      {/* <French></French> */}
    </div>
  );
}

export default App;
