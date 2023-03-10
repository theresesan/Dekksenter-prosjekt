import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

// Images and Logos
import SannidalDekksenter from "/images/SannidalDekksenter.png";

function NavBar() {
  const location = useLocation();
  const [path, setPath] = useState("/");

  useEffect(() => {
    setPath(location.pathname);
  }, [location]);

  return (
    <div className="flex-nav">
      <div className="logo-box">
        <Link to="/">
          <img
            className="Nav-logo"
            src={SannidalDekksenter}
            alt="Sannidal Dekksenter logo"
          />
        </Link>
      </div>
      <div className="flex-list">
        <ul className="Nav-items">
          <li>
            <Link to="/" className={`list-item ${path === "/" ? "active" : ""}`}>
              Forside
            </Link>
          </li>
          <li>
            <Link
              to="/Page2"
              className={`list-item ${path === "/Page2" ? "active" : ""}`}
            >
              Dekk
            </Link>
          </li>
          <li>
            <Link
              to="/Page3"
              className={`list-item ${path === "/Page3" ? "active" : ""}`}
            >
              Felg
            </Link>
          </li>
          <li>
            <Link
              to="/Page4"
              className={`list-item ${path === "/Page4" ? "active" : ""}`}
            >
              Dekkhotell
            </Link>
          </li>
          <li>
            <Link
              to="/Page5"
              className={`list-item ${path === "/Page5" ? "active" : ""}`}
            >
              Om oss
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default NavBar;
