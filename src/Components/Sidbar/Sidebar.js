import { React, useState,useEffect } from "react";
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

import { Link } from "react-router-dom";

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
      document.documentElement.style.setProperty(
        "--main-color",
         "#626c75"
      );
      document.documentElement.style.setProperty("--very-dark", "#000");

     
    } else {
      document.documentElement.style.setProperty(
        "--main-color",
        "rgb(97,27,227)"
      );
      
      document.documentElement.style.setProperty(
        "--very-dark", "rgb(204, 204, 204)"
        );
 
     
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

        <div className={click? "sidebar" : "fadeSB"}>

          <div className="logo">
            <img
              src= {logo}
              alt="logo"
              height="50px"
              width="50px"
            />
          </div>

          <div className="SidebarContainer" >
            <ul className="sidebar_list">
              <Link to="/">
                <li>
                  <GoHome className="sidbar_icons" />
                  <motion.span className= "abeer"
                   whileHover={{scale:1.4,originX:0}}
                   transition={{type:'spring',stiffness:300,duration: .4}}
                  >home</motion.span>
                </li>
              </Link>

              <Link to="/Profile">
                <li>
                  <BsPersonSquare className="sidbar_icons" />
                  <span className= "abeer" >profile</span>
                </li>
              </Link>
              <Link to="/Sikles">
                <li>
                  <BsCodeSlash className="sidbar_icons" />
                  <span className= "abeer" >sikles</span>
                </li>
              </Link>
              <Link to="/Work">
                <li>
                  <BsWallet className="sidbar_icons" />
                  <span className= "abeer" >my work</span>
                </li>
              </Link>

              <Link to="/CallME">
                <li>
                  <FiPhoneCall className="sidbar_icons" />
                  <span className= "abeer">call me</span>
                </li>
              </Link>
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
 