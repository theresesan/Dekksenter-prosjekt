import React from "react";

// CSS
import "./App.css";

// Components
import Button from "./components/Button";

// Images and Logos
import Dekksenter from "/images/dekksenter-img.png";
import FacebookIcon from "/images/facebook-icon.png";
import SannidalDekksenter from "/images/SannidalDekksenter.png";

function Page5() {
  return (
    <div className="Page5">
      <div className="Om-info">
        <div>
          <p className="Om-info-txt">
            Sannidal dekk og felg ble startet 1. september 2009. Vi startet først opp
            på Tangen i Sannidal. Vi flyttet til Refsalen i Sannidal i 2013 og her er
            vi den dag i dag. Vi bygget nye lokaler i 2019 og i dag inneholder selve
            butikken, dekk verksted, kontorlokaler og utleiedel. Et nytt bygg er
            under oppføring og vil stå ferdig høsten 2020.
          </p>
          <a href="https://www.facebook.com/sannidaldekkogfelg/" target="_blank">
            <img src={FacebookIcon} alt="Facebook icon" className="FacebookIcon" />
          </a>
        </div>
      </div>
      <div className="Page5-imgbox">
        <img className="Page5-img" src={Dekksenter} alt="Bilde av felger" />
      </div>
      <div className="Footer">
        <div className="IconFooterBox">
          <div className="Mail">
            <div>
              {" "}
              <span className="material-symbols-outlined">mail</span>
            </div>
          </div>
          <div className="Phone">
            <div>
              <span className="material-symbols-outlined">call</span>
            </div>
          </div>
          <div className="AddresBox">
            <div>
              {" "}
              <span class="material-symbols-outlined">location_on</span>
            </div>
          </div>
        </div>
        <div className="TxtFooterBox">
          <div className="Footer-icon">
            <p className="FooterTxt">Post@sannidaldekkogfelg.no</p>
          </div>
          <div className="Footer-icon">
            <p className="FooterTxt">
              910 09 200 / <br /> 410 47 999
            </p>
          </div>
          <div className="Footer-icon">
            <p className="FooterTxt">Refsalen 1, 3766 Sannidal</p>
          </div>
        </div>
        <div>
          <img
            className="FooterLogo"
            src={SannidalDekksenter}
            alt="Sannidal Dekksenter logo"
          />
          <div className="Clock">
            <p>
              Man - fre: 06-16 <br />
              Lørdag: Stengt
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page5;
