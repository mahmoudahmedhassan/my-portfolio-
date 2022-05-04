import React from "react";
import "./work.css";
import { Container, Row, Col } from "react-bootstrap";
import todo from "../../SVG/todo.png";
import quiz from "../../SVG/quiz.png";
import countries from "../../SVG/countries.png";
import moives from "../../SVG/moives.png";
import searchmovie from "../../SVG/searchmovie.png";
import youtube from "../../SVG/youtube.png";
import ecommerce from "../../SVG/ecommerce.png";
import hdomy from "../../SVG/hdomy.jfif";

import black from "../../SVG/black.jpg";
import { motion } from "framer-motion";

function Work() {

  return (
    <motion.div
      initial={{ y: 1000 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", duration: 1, stiffness: 100 }}
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
                  <div className='buttons-demo'>
                    <button className="show-demo"> <a target='_blank' href='https://todo-react-app-11.netlify.app/' rel="noopener noreferrer" >Demo </a> </button>
                    <button className="show-demo"> <a target='_blank' href='https://github.com/mahmoudahmedhassan/React-Redux-Todo-App' rel="noopener noreferrer" >Code</a> </button>
                  </div>

                </div>
                <img src={todo} alt="todo app" />
              </div>
            </Col>
            
            <Col xs={12} md={6} lg={4}>
              <div className="my-work" >
                <div className="overlay">
                  <p className="caption">  Quiz Site </p>
                  <div className='buttons-demo'>
                    <button className="show-demo"><a href='https://react-quiz-app-1.netlify.app/' target='_blank' rel="noopener noreferrer">Demo  </a> </button>
                    <button className="show-demo"> <a target='_blank' href='https://github.com/mahmoudahmedhassan/create-quiz-app' rel="noopener noreferrer" >Code</a> </button>
                  </div>
                </div>
                <img src={quiz} alt="quiz app" />
              </div>
            </Col>

            <Col xs={12} md={6} lg={4}>
              <div className="my-work">
                <div className="overlay">
                  <p className="caption">Rest Countries Site</p>
                  <div className='buttons-demo'>
                    <button className="show-demo"><a href='https://lucid-mccarthy-d7687b.netlify.app' target='_blank' rel="noopener noreferrer">Demo  </a> </button>
                    <button className="show-demo"> <a target='_blank' href='https://github.com/mahmoudahmedhassan/REST-Countries-API-.git' rel="noopener noreferrer" >Code</a> </button>
                  </div>
                </div>
                <img src={countries} alt="countries app" />
              </div>
            </Col>

            <Col xs={12} md={6} lg={4}>
              <div className="my-work">
                <div className="overlay">
                  <p className="caption">Movies Site </p>
                  <div className='buttons-demo'>
                    <button className="show-demo"> <a href='https://entertainment-hub11.netlify.app/' target='_blank' rel="noopener noreferrer"> Demo  </a> </button>
                    <button className="show-demo"> <a target='_blank' href='https://github.com/mahmoudahmedhassan/react-entertainment-hub.git' rel="noopener noreferrer" >Code</a> </button>
                  </div>

                </div>
                <img src={moives} alt="moives app" />
              </div>
            </Col>

            <Col xs={12} md={6} lg={4}>
              <div className="my-work">
                <div className="overlay">
                  <p className="caption">Redux Search Movies Site </p>
                  <div className='buttons-demo'>
                    <button className="show-demo"> <a href='https://cocky-shirley-91da87.netlify.app' target='_blank' rel="noopener noreferrer"> Demo Live</a></button>
                    <button className="show-demo"> <a target='_blank' href='https://github.com/mahmoudahmedhassan/e-commerce--react-redux.git' rel="noopener noreferrer" >Code</a> </button>
                  </div>
                </div>
                <img src={searchmovie} alt="searchmovie app" />
              </div>
            </Col>

            <Col xs={12} md={6} lg={4}>
              <div className="my-work">
                <div className="overlay">
                  <p className="caption">Clone Static YouTube </p>
                  <div className='buttons-demo'>
                    <button className="show-demo"> <a href='https://colon-static-youtube.netlify.app/' target='_blank' rel="noopener noreferrer"> Demo Live</a></button>
                    <button className="show-demo"> <a target='_blank' href='https://github.com/mahmoudahmedhassan/Static-YouTube-Clone.git' rel="noopener noreferrer" >Code</a> </button>
                  </div>
                </div>
                <img src={youtube} alt="searchmovie app" />
              </div>
            </Col>

            <Col xs={12} md={6} lg={4}>
              <div className="my-work">
                <div className="overlay">
                  <p className="caption">E-commerce React-Redux </p>
                  <div className='buttons-demo'>
                    <button className="show-demo"> <a href='https://e-commerce-react-redux-1.netlify.app/' target='_blank' rel="noopener noreferrer"> Demo Live</a></button>
                    <button className="show-demo"> <a target='_blank' href='https://github.com/mahmoudahmedhassan/e-commerce--react-redux.git' rel="noopener noreferrer" >Code</a> </button>
                  </div>
                </div>
                <img src={ecommerce} alt="searchmovie app" />
              </div>
            </Col>

            <Col xs={12} md={6} lg={4}>
              <div className="my-work">
                <div className="overlay">
                  <p className="caption">Hdomy Store </p>
                  <div className='buttons-demo'>
                    <button className="show-demo"> <a href='https://hdomystore1.netlify.app/ ' target='_blank' rel="noopener noreferrer"> Demo Live</a></button>
                    <button className="show-demo"> <a target='_blank' href='https://github.com/mahmoudahmedhassan/Hodmy-E-commerce-.git' rel="noopener noreferrer" >Code</a> </button>
                  </div>
                </div>
                <img src={hdomy} alt="searchmovie app" />
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
