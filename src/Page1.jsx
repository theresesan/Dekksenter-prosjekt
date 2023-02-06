import React from "react";

// CSS
import "./App.css";

// Components
import Carousel from "./components/Carousel";

function Page1() {
  return (
    <div className="Page1">
      <Carousel />
      <div className="flexContainer">
        <div className="firstPageTxt">
          <div className="Flex1">
            <img
              className="FirstPageLogo"
              src="/images/maps-and-flags-removebg-preview.png"
              alt=""
            />
            <p>Refsalen 1, 3766 Sannidal</p>
          </div>
          <div className="Flex2">
            <img
              className="FirstPageLogo"
              src="/images/telephone-removebg-preview.png"
              alt=""
            />
            <p>910 09 200</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page1;
