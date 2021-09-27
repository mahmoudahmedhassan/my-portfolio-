import React from "react";
import "./profile.css";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Image from "react-bootstrap/Image";
import profile from "../../SVG/profile.jpg";

import { motion } from "framer-motion";

function Profile() {
  return (
    <motion.div
      initial={{ y: 1000 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", duration: 1 ,stiffness: 100}}
      style={{ width: "100%" }}
    >
      <div className="profile">
        <Container>
          <Row>
            <div className='column-reverse'>
            <Col className="edit" xs={12} md={6} lg={6}>
              <div className="about">
                <p className="about-name">
                  I'M <span>MAHMODE AHMED</span>
                </p>
                <p className="about-title-job">
                  A <span>front-end web developer</span> living in Assuit.
                </p>
                <p className="about-description">
                  I Work In Front-End Web Development, And I Have Experience In
                  Dealing With Programming And Modern Web Technologies, And I
                  Have Built A Lot Of Projects That Have Increased My Experience
                  And Trained A Lot, I Am A Fast Learner And Always Love To
                  Develop Myself
                </p>
              </div>
            </Col>
            <Col xs={12} md={6} lg={6}>
              <div className="profile-image">
                <Image
                  src={profile}
                  height="200px"
                  width="200px"
                  thumbnail
                />
              </div>
            </Col>
            </div>
            
          </Row>
        </Container>
      </div>
    </motion.div>
  );
}

export default Profile;
