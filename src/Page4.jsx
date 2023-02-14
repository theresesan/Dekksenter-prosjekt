import React from "react";

// CSS
import "./App.css";

// Components
import Button from "./components/Button";

// Images and Logos
import DekkhotellImg from "/images/dekk.jpeg";

function Page4() {
  return (
    <div className="Page4">
      <div className="Page4-imgbox">
        <div className="List-dekkhotell">
          <h3 className="PriceTxt">Priser dekkhotell</h3>
          <ul className="Price-list">
            <li>Personbil og suv: 799,-</li>
            <li>Bobil og lett lastebil: 899,-</li>
            <li>Lastebil og traktor: etter avtale</li>
          </ul>
        </div>
        <img className="Page4-img" src={DekkhotellImg} alt="Bilde av felger" />
      </div>
      <div className="Dekkhotell-info">
        <div>
          <h2 className="Dekkhotell-txt">Hvorfor Dekkhotell?</h2>
        </div>
        <div>
          <p className="Dekkhotell-info-txt">
            Vårt dekkhotell sparer deg plass og sørger for trygg lagring for dine
            dekk. Overlat til oss å håndtere de skitne hjulene, og frigjør plass i
            hjemmet. Sjekk av lufttrykk og mønsterdybde Bedre holdbarhet på felger
            Forutsigbare kostnader Frigjøring av plass i bod/garasje Sjekk av
            lufttrykk og mønsterdybde Kontroll av TPMS-sensor Slitasje, ujevnheter og
            skader oppdages tidligere.
          </p>
        </div>
        {/* <Button /> */}
      </div>
    </div>
  );
}

export default Page4;
