import { React, useState, useEffect } from "react";
import "./sidebar.css";

// ======= icons sidbar =========
import { GoHome } from "react-icons/go";
import { BsPersonSquare } from "react-icons/bs";
import { BsCodeSlash } from "react-icons/bs";
import { BsWallet } from "react-icons/bs";
import { FiPhoneCall } from "react-icons/fi";
import { WiDaySunnyOvercast } from "react-icons/wi";
import { TiThListOutline } from "react-icons/ti";
import { GiMoon } from "react-icons/gi";
import { CgPlayListRemove } from "react-icons/cg";

import { NavLink } from "react-router-dom";

import { motion } from "framer-motion";
import logo from "../../SVG/logo.jpg";

function Sidebar() {
  const [click, setClick] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  const handleToggle = () => {
    setClick(!click);
  };

  useEffect(() => {
    if (darkMode) {
      document.documentElement.style.setProperty("--main-color", "#626c75");
      document.documentElement.style.setProperty("--very-dark", "#000");
      document.documentElement.style.setProperty("--white", "#626c75");
      document.documentElement.style.setProperty("--clone-main-color", "#fff");
      document.documentElement.style.setProperty("--clone-white", "#fff");
    } else {
      document.documentElement.style.setProperty(
        "--main-color",
        "rgb(97,27,227)"
      );
      document.documentElement.style.setProperty(
        "--very-dark",
        "rgb(204, 204, 204)"
      );
      document.documentElement.style.setProperty("--white", "#fff");
      document.documentElement.style.setProperty(
        "--clone-main-color",
        "rgb(97,27,227)"
      );
      document.documentElement.style.setProperty("--clone-white", "#000");
    }
  }, [darkMode]);

  return (
    <div className="main">
      <button className="consrol_btn" onClick={handleToggle}>
        {click ? (
          <CgPlayListRemove className="close" />
        ) : (
          <TiThListOutline className="open" />
        )}
      </button>

      <div className={click ? "sidebar" : "fadeSB"}>
        <div className="logo">
          <img src={logo} alt="logo" height="50px" width="50px" />
        </div>

        <div className="SidebarContainer">
          <ul className="sidebar_list">
            <NavLink to="/" activeClassName="active" exact>
              <li>
                <GoHome className="sidbar_icons" />
                <motion.span
                  className="abeer"
                  whileHover={{ scale: 1.2, originX: 0 }}
                  transition={{ type: "spring", stiffness: 300, duration: 0.4 }}
                >
                  Home
                </motion.span>
              </li>
            </NavLink>

            <NavLink to="/Profile" activeClassName="active" exact>
              <li>
                <BsPersonSquare className="sidbar_icons" />
                <motion.span
                  className="abeer"
                  whileHover={{ scale: 1.2, originX: 0 }}
                  transition={{ type: "spring", stiffness: 300, duration: 0.4 }}
                >
                  Profile
                </motion.span>{" "}
              </li>
            </NavLink>
            <NavLink to="/Sikles" activeClassName="active" exact>
              <li>
                <BsCodeSlash className="sidbar_icons" />
                <motion.span
                  className="abeer"
                  whileHover={{ scale: 1.2, originX: 0 }}
                  transition={{ type: "spring", stiffness: 300, duration: 0.4 }}
                >
                  Sikles
                </motion.span>{" "}
              </li>
            </NavLink>
            
            <NavLink to="/Work" activeClassName="active" exact>
              <li>
                <BsWallet className="sidbar_icons" />
                <motion.span
                  className="abeer"
                  whileHover={{ scale: 1.1, originX: 0 }}
                  transition={{ type: "spring", stiffness: 300, duration: 0.4 }}
                >
                  My Work
                </motion.span>{" "}
              </li>
            </NavLink>

            <NavLink to="/CallME" activeClassName="active" exact>
              <li>
                <FiPhoneCall className="sidbar_icons" />
                <motion.span
                  className="abeer"
                  whileHover={{ scale: 1.1, originX: 0 }}
                  transition={{ type: "spring", stiffness: 300, duration: 0.4 }}
                >
                  Call Me
                </motion.span>{" "}
              </li>
            </NavLink>
          </ul>
        </div>

        <div className="dark_mode">
          <div className="dark" onClick={toggleDarkMode}>
            {darkMode ? <GiMoon /> : <WiDaySunnyOvercast />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
