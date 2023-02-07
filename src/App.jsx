import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

// Components
import Navbar from "./components/Navbar";
import Carousel from "./components/Carousel";

// Images and Logos
import Telephone from "/images/telephone.png";
import Map from "/images/maps-logo.png";

// Routes
import Page1 from "./Page1";
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
          <Route path="/" element={<Page1 />} />
          <Route path="/Page1" element={<Page1 />} />
          <Route path="/Page2" element={<Page2 />} />
          <Route path="/Page3" element={<Page3 />} />
          <Route path="/Page4" element={<Page4 />} />
          <Route path="/Page5" element={<Page5 />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
