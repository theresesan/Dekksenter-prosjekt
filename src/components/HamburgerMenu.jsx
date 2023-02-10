import React, { useState } from "react";
import { Link } from "react-router-dom";
import HamburgerIcon from "/images/menu-icon.png";
import SannidalLogo from "/images/SannidalDekksenter.png";

const HamburgerMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="hamburger-menu">
      <div className="menu-logo">
        <div className="SannidalLogo">
          <Link to="/">
            <img src={SannidalLogo} alt="Sannidal Dekksenter Logo" />
          </Link>
        </div>
        <img src={HamburgerIcon} alt="Menu Icon" onClick={toggleMenu} />
      </div>
      <ul className={`${isMenuOpen ? "open" : ""}`}>
        <li>
          <Link to="/" onClick={toggleMenu}>
            Forside
          </Link>
        </li>
        <li>
          <Link to="/Page2" onClick={toggleMenu}>
            Dekk
          </Link>
        </li>
        <li>
          <Link to="/Page3" onClick={toggleMenu}>
            Felg
          </Link>
        </li>
        <li>
          <Link to="/Page4" onClick={toggleMenu}>
            Dekkhotell
          </Link>
        </li>
        <li>
          <Link to="/Page5" onClick={toggleMenu}>
            Om Oss
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default HamburgerMenu;
