import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import styles from "./NavBar.module.scss";
import { ReactComponent as IconHome } from "../../img/icon-home.svg";
import { ReactComponent as IconStatistics } from "../../img/icon-statistics.svg";
import { ReactComponent as IconExchange } from "../../img/icon-exchange.svg";

function NavBar() {
  const [activeIcon, setActiveIcon] = useState("home");
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname;
    if (path === "/") {
      setActiveIcon("home");
    } else if (path === "/statistic") {
      setActiveIcon("statistics");
    } else if (path === "/exchange") {
      setActiveIcon("exchange");
    }
  }, [location]);

  return (
    <nav>
      <ul className={styles.navbarContainer}>
        <li>
          <NavLink exact to="/" activeClassName={styles.active}>
            <IconHome
              fill={activeIcon === "home" ? "#4A56E2" : "#6E78E8"}
              className={`${styles.nav__svg} ${
                activeIcon === "home" ? styles.active : ""
              }`}
            />
            <span
              className={`${styles.text} ${
                activeIcon === "home" ? styles.active : ""
              }`}
            >
              Home
            </span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/statistic" activeClassName={styles.active}>
            <IconStatistics
              fill={activeIcon === "statistics" ? "#4A56E2" : "#6E78E8"}
              className={`${styles.nav__svg} ${
                activeIcon === "statistics" ? styles.active : ""
              }`}
            />
            <span
              className={`${styles.text} ${
                activeIcon === "statistics" ? styles.active : ""
              }`}
            >
              Statistics
            </span>
          </NavLink>
        </li>
        <li className={styles.mobileOnly}>
          <NavLink to="/exchange" activeClassName={styles.active}>
            <IconExchange
              fill={activeIcon === "exchange" ? "#4A56E2" : "#6E78E8"}
              className={`${styles.nav__svg} ${
                activeIcon === "exchange" ? styles.active : ""
              }`}
            />
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
