import React from "react";

// CSS
import "./App.css";

// Components
import Button from "./components/Button";

// Images and Logos
import TireImg from "/images/omlegg_dekk.jpeg";
import Banner from "/images/tire-banner.jpg";

function Page2() {
  return (
    <div className="Page2">
      <div className="Page2-imgbox">
        <img
          className="Page2-img"
          src={TireImg}
          alt="Bilde av noen som jobber med dekk"
        />
      </div>
      <div>
        <img className="TireBanner" src={Banner} alt="" />
      </div>
      <div className="Dekk-info">
        <div>
          <h2 className="Dekk-txt">Dekk</h2>
        </div>
        <div>
          <p className="Dekk-info-txt">
            Er på tide med nye dekk? Å velge riktig dekk viktig for å være trygg på
            veien uansett vær og føre. Hos oss finner du ett godt utvalg av dekk i
            forskjellige prisklasser. Vi hjelper deg med å finne de riktige dekkene
            som er best for din bil av både sommerdekk, vinterdekk og piggdekk. Vi
            har dekk til alle typer personbiler, varebiler, ATV og traktor. <br />{" "}
            <br /> Ring og bestill time, eller vi bytter mens du venter.
          </p>
        </div>
        <Button />
      </div>
    </div>
  );
}

export default Page2;
