import React from "react";
import "./home.css";
import { motion } from "framer-motion";
function Home() {

  return (
    <motion.div
      initial={{ y: 1000 }}
      animate={{ y:0 }}
      transition={{ type: "spring", duration:1 }}
    >
      <div className="home">
        <div className="introduction">
          <p className="introduction-name">
            i'm <span>mahmoud ahmed</span>
          </p>
          <p className="introduction-name-job"> front end developer</p>
        </div>

        <div className="hey">
          <h1>HEY!</h1>
        </div>
      </div>
    </motion.div>
  );
}
export default Home;
