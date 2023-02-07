import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

// Components
import Navbar from "./components/Navbar";
import Carousel from "./components/Carousel";

// Images and Logos
import Telephone from "/images/telephone.png";
import Map from "/images/maps-logo.png";

// Routes
import Page2 from "./Page2";
import Page3 from "./Page3";
import Page4 from "./Page4";
import Page5 from "./Page5";

// CSS
import "./App.css";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" />
          <Route path="/Page2" element={<Page2 />} />
          <Route path="/Page3" element={<Page3 />} />
          <Route path="/Page4" element={<Page4 />} />
          <Route path="/Page5" element={<Page5 />} />
        </Routes>
        <div className="Page1">
          <Carousel />
          <div className="flexContainer">
            <div className="firstPageTxt">
              <div className="Flex1">
                <img
                  className="FirstPageLogo"
                  src={Map}
                  alt="Logo av ett kart pin"
                />
                <p>Refsalen 1, 3766 Sannidal</p>
              </div>
              <div className="Flex2">
                <img className="FirstPageLogo" src={Telephone} alt="Telefon logo" />
                <p>910 09 200</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
