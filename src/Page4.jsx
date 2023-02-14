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
            Vårt dekkhotell sparer deg plass og sørger for trygg lagring av dine dekk
            i riktig temperatur, lysforhold og oppbevaringsmåte hele året for bedre
            holdbarhet. Overlat til oss å håndtere de skitne hjulene, og frigjør
            plass i hjemmet. Vi tar oss av sjekk av lufttrykk og mønsterdybde ved
            bruk av TPMS-sensor hvor slitasje, ujevnheter og skader oppdages
            tidligere. Når det er på tide å skifte hjul er dekkene i god stand og
            klar for en ny sesong på veien.
          </p>
        </div>
        <ul className="Price-list">
          <li>Personbil og suv: 799,-</li>
          <li>Bobil og lett lastebil: 899,-</li>
          <li>Lastebil og traktor: etter avtale</li>
        </ul>
        {/* <Button /> */}
      </div>
    </div>
  );
}

export default Page4;
