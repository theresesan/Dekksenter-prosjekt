import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

function NavBar() {
  const location = useLocation();
  const [path, setPath] = useState("/Page1");

  useEffect(() => {
    setPath(location.pathname);
  }, [location]);

  return (
    <div className="flex-nav">
      <div className="logo-box">
        <img
          className="Nav-logo"
          src="/images/SannidalDekksenter.png"
          alt="Sannidal Dekksenter logo"
        />
      </div>
      <div className="flex-list">
        <ul className="Nav-items">
          <li>
            <Link
              to="/Page1"
              className={`list-item ${path === "/Page1" ? "active" : ""}`}
            >
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
