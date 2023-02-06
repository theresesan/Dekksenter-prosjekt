import React from "react";

// CSS
import "./App.css";

// Components
import Carousel from "./components/Carousel";

// Images and Logos
import Telephone from "/images/telephone.png";
import Map from "/images/maps-logo.png";

function Page1() {
  return (
    <div className="Page1">
      <Carousel />
      <div className="flexContainer">
        <div className="firstPageTxt">
          <div className="Flex1">
            <img className="FirstPageLogo" src={Map} alt="Logo av ett kart pin" />
            <p>Refsalen 1, 3766 Sannidal</p>
          </div>
          <div className="Flex2">
            <img className="FirstPageLogo" src={Telephone} alt="Telefon logo" />
            <p>910 09 200</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page1;
