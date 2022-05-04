import React from "react";
import "./callme.css";
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";

import { FiPhoneCall } from "react-icons/fi";
import { HiOutlineMail, HiOutlineLocationMarker} from "react-icons/hi";

import linkedin from "../../SVG/linkedin-pngrepo-com.png";
import github from "../../SVG/github-sign.png";
import whatsapp from "../../SVG/whatsapp.png";

function CallME() {
  return (
    <motion.div
      initial={{ y: 1000 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", duration: 1 }}
      style={{width:'100%'}}
    >
      <div className="call-me">
        <h1 className="call-me-title">Contact Me</h1>
        <Container>
          <Row>
            <Col>
              <div className="details">
                <div>
                  <FiPhoneCall className="detailes-icon" /> <span>phone</span>
                  <p className="details-area">01096759755</p>
                </div>
              </div>
            </Col>

            <Col>
              <div className="details">
                <div>
                  <HiOutlineMail className="detailes-icon" /> <span>Email</span>
                </div>
                <p className="details-area my-email">mahmoud.ahmed.hasssan@gmail.com</p>
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <div className="details">
                <div>
                  <HiOutlineLocationMarker className="detailes-icon" />{" "}
                  <span>location</span>
                </div>
                <p className="details-area">Assuit</p>
              </div>
            </Col>
          </Row>
        </Container>
        <div className="social-media">
          <ul>
            <li>
              <a href="https://linkedin.com/in/mahmoud-ahmed-85a3b5197" target="_blank" rel="noopener noreferrer">
                  <img src={linkedin} alt="" height="50px" width="50px" />
              </a>
            </li>

            <li>
            <a href="https://github.com/mahmoudahmedhassan" target="_blank" rel="noopener noreferrer">
               <img src={github} alt="" height="50px" width="50px" style={{ backgroundColor:'var(--white)'}}/>
            </a>
            </li>

            <li > 
              <a href="http://whatsapp.my/01096759755" target="_blank" rel="noopener noreferrer">
                 <img src={whatsapp} alt="" height="50px" width="50px" />
              </a>
            </li>
            
          </ul>
        </div>
      </div>
    </motion.div>
  );
}

export default CallME;
