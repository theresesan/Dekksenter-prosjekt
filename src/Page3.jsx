import React from "react";

// CSS
import "./App.css";

// Components
import Button from "./components/Button";

// Images and Logos
import FelgImg from "/images/felgimg.jpg";

function Page3() {
  return (
    <div className="Page3">
      <div className="Felg-info">
        <div>
          <h2 className="Felg-txt">Felg</h2>
        </div>
        <div>
          <p className="Felg-info-txt">
            Vi tilbyr et stort utvalg felger i forskjellige prisklasser og kvalitet,
            og hjelper deg med å finne de som passer ditt behov best.
          </p>
        </div>
        <Button />
      </div>
      <div className="Page3-imgbox">
        <img className="Page3-img" src={FelgImg} alt="Bilde av felger" />
      </div>
    </div>
  );
}

export default Page3;
