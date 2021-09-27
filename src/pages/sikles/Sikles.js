import React from "react";
import "./sikles.css";
import { Container, Row, Col } from "react-bootstrap";

import js from "../../SVG/js.svg";
import html5 from "../../SVG/html5.svg";
import css from "../../SVG/css.svg";
import github from "../../SVG/github.svg";
import bootstrap from "../../SVG/bootstrap.svg";
import react from "../../SVG/react.png";
import { motion } from "framer-motion";

function Sikles() {
  return (
    <motion.div
    initial={{ y: 1000 }}
    animate={{ y: 0 }}
    transition={{ type: "spring", duration: 1 }}
    style={{ width: "100%" }}
  >
    <div className="sikles">
         <h1>My Sikles</h1>
 
      <Container>
        <Row>

          <Col className='edit' xs={6} md={6} lg={4}>
            <div className="card">
              <img src={html5} alt="js" height="50px" width="50px" />
              <span>html5</span>
            </div>
          </Col>

          <Col className='edit' xs={6} md={6} lg={4}>
            <div className="card">
              <img src={css} alt="js" height="50px" width="50px" />
              <span>css</span>
            </div>
          </Col>

          <Col className='edit' xs={6} md={6} lg={4}>
            <div className="card">
              <img src={bootstrap} alt="js" height="50px" width="50px" />
              <span>bootstrap</span>
            </div>
          </Col>
           <Col className='edit' xs={6} md={6} lg={4}>
            <div className="card">
              <img src={js} alt="js" height="50px" width="50px" />
              <span>javascript</span>
            </div>
          </Col>

          <Col className='edit' xs={6} md={6} lg={4}>
            <div className="card">
              <img src={react} alt="js" height="50px" width="50px" />
              <span>react</span>
            </div>
          </Col>

          <Col className='edit' xs={6} md={6} lg={4}>
            <div className="card">
              <img src={github} alt="js" height="50px" width="50px" />
              <span>github</span>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
    </motion.div>
  );
}

export default Sikles;
