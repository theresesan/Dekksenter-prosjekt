import React from "react";

// CSS
import "./App.css";

// Components
import Button from "./components/Button";

// Images and Logos
import FelgImg from "/images/felger.jpeg";

function Page3() {
  return (
    <div className="Page3">
      <div className="Felg-info">
        <div>
          <h2 className="Felg-txt">Felg</h2>
        </div>
        <div>
          <p className="Felg-info-txt">
            Hos oss i Sannidal dekk og felg finner du ett godt utvalgt av felger i
            forskjellige prisklasser og kvalitet. Felger er en langsiktig investering
            for din bil som er med på løfte bilens utseende. <br /> <br /> Om du er
            ute etter å ha noen stilige felger til sommersesongen eller bare stilrene
            som passer hele året, så hjelper vi deg med å finne felger etter ditt
            behov. Legg inn registreringsnummeret i dekkshop for å se vårt utvalg av
            felger som passer din bil.
          </p>
        </div>
        {/* <Button /> */}
      </div>
      <div className="Page3-imgbox">
        <img className="Page3-img" src={FelgImg} alt="Bilde av felger" />
      </div>
    </div>
  );
}

export default Page3;
