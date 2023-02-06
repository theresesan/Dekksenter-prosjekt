import React from "react";

// CSS
import "./App.css";

// Components
import Button from "./components/Button";

// Images and Logos
import TireImg from "/images/change-tires.jpg";

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
      <div className="Dekk-info">
        <div>
          <h2 className="Dekk-txt">Dekk</h2>
        </div>
        <div>
          <p className="Dekk-info-txt">
            Vi har dekk til alle typer personbiler, varebiler, ATV og traktor. Vi
            legger om og avbalanserer. Ring og bestill time, eller vi bytter mens du
            venter. <br /> <br /> <br />
            Vil du ikke oppbevare dekkene dine selv eller har ikke plass. Vi har
            dekkhotell!
          </p>
        </div>
        <Button />
      </div>
    </div>
  );
}

export default Page2;
