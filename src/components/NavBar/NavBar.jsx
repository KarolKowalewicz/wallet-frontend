import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styles from "./NavBar.module.scss";

function NavBar() {
  const [activeIcon, setActiveIcon] = useState("home");

  const handleIconClick = (iconName) => {
    setActiveIcon(iconName);
  };

  return (
    <nav>
      <div>
        <ul className={styles["navbar-container"]}>
          <li>
            <NavLink
              exact
              to="/"
              activeClassName={styles.activeLink}
              onClick={() => handleIconClick("home")}
            >
              <img
                src={
                  activeIcon === "home"
                    ? require("./../../img/home_dark.png")
                    : require("./../../img/home_light.png")
                }
                className={`${styles.navbaricon} ${
                  activeIcon === "home" ? styles.activeIcon : ""
                }`}
                alt="Home"
                style={{
                  width: "38px",
                  height: "38px",
                }}
              />
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/statistic"
              activeClassName={styles.activeLink}
              onClick={() => handleIconClick("statistic")}
            >
              <img
                src={
                  activeIcon === "statistics"
                    ? require("./../../img/statistics_dark.png")
                    : require("./../../img/statistics_light.png")
                }
                className={`${styles.navbaricon} ${
                  activeIcon === "statistics" ? styles.activeIcon : ""
                }`}
                alt="Statistics"
                style={{
                  width: "38px",
                  height: "38px",
                }}
              />
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/exchange"
              activeClassName={styles.activeLink}
              onClick={() => handleIconClick("exchange")}
            >
              <img
                src={
                  activeIcon === "exchange"
                    ? require("./../../img/dollar_dark.png")
                    : require("./../../img/dollar_light.png")
                }
                className={`${styles.navbaricon} ${
                  activeIcon === "exchange" ? styles.activeIcon : ""
                }`}
                alt="Current Exchange"
                style={{
                  width: "38px",
                  height: "38px",
                }}
              />
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
