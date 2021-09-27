import React from "react";
import "./work.css";
import { Container, Row, Col } from "react-bootstrap";
import todo from "../../SVG/todo.png";
import quiz from "../../SVG/quiz.png";
import countries from "../../SVG/countries.png";
import moives from "../../SVG/moives.png";
import searchmovie from "../../SVG/searchmovie.png";
import youtube from "../../SVG/youtube.png";

import black from "../../SVG/black.jpg";
import { motion } from "framer-motion";

function Work() {
  return (
    <motion.div
    initial={{ y: 1000 }}
    animate={{ y: 0 }}
    transition={{ type: "spring", duration: 1 ,stiffness: 100}}
    style={{ width: "100%" }}
  >
    <div className="work">
        <h1>My Work</h1>
      <Container>
        <Row>
          <Col xs={12} md={6} lg={4}>
            <div className="my-work">
              <div className="overlay">
                  <p className="caption">Redux Todo Site</p>
                <button className="show-demo"> <a href='https://todoapp111.netlify.app/' target='_blank'>Demo Live</a> </button>
              </div>
              <img src={todo} alt="todo app" />
            </div>
          </Col>
          <Col xs={12} md={6} lg={4}>
            <div className="my-work" >
              <div className="overlay">
                  <p className="caption">  Quiz Site </p>
                <button className="show-demo"><a href='https://quizapp-11.netlify.app/' target='_blank'>Demo Live</a> </button>
              </div>
              <img src={quiz} alt="quiz app" />
            </div>
          </Col>
          <Col xs={12} md={6} lg={4}>
            <div className="my-work">
              <div className="overlay">
              <p className="caption">Rest Countries Site</p>
                <button className="show-demo"><a href='https://restcuntriesapi.netlify.app/' target='_blank'>Demo Live</a> </button>
              </div>
              <img src={countries} alt="countries app" />
            </div>
          </Col>
          <Col xs={12} md={6} lg={4}>
            <div className="my-work">
              <div className="overlay">
              <p className="caption">Movies Site </p>
                <button className="show-demo"> <a href='https://entertainment-hub11.netlify.app/' target='_blank'> Demo Live</a> </button>

              </div>
              <img src={moives} alt="moives app" />
            </div>
          </Col>
          <Col xs={12} md={6} lg={4}>
            <div className="my-work">
              <div className="overlay">
                 <p className="caption">Redux Search Movies Site </p>
                <button className="show-demo"> <a href='https://searchmoviesidbm.netlify.app' target='_blank'> Demo Live</a></button>
              </div>
              <img src={searchmovie} alt="searchmovie app" />
            </div>
          </Col>

          <Col xs={12} md={6} lg={4}>
            <div className="my-work">
              <div className="overlay">
                 <p className="caption">Clone Static YouTube   </p>
                <button className="show-demo"> <a href='https://staticolonyoutube.netlify.app/' target='_blank'> Demo Live</a></button>
              </div>
              <img src={youtube} alt="searchmovie app" />
            </div>
          </Col>

          <Col xs={12} md={6} lg={4}>
            <div className="my-work">
              <div className="overlay soon">
                 <p className="caption">SOON </p>
               </div>
                <img src={black} alt="searchmovie app" />
             </div>
          </Col>
        </Row>
      </Container>
    </div>
    </motion.div>
  );
}

export default Work
