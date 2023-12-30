import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import LaptopImg from "../../assets/home-main.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";



const About = () => {
    return (
        <Container fluid className="home-about-section" id="about">
          <Container>
            <Row>
              <Col md={8} className="home-about-description">
                <h1 style={{ fontSize: "2.6em" }}>
                  LET ME <span className="yellow"> INTRODUCE </span> MYSELF
                </h1>
                <p className="home-about-body">
                 Hi, my name is <span className="yellow">Pranav Prajantrao Deshmukh </span>
                 and I'm from <span className="yellow"> Baramati, Maharastra.</span>
                <br />
                <br />
                Currently, pursuing my bachelor's degree in 
                <b className="yellow"> computer Engineering </b>at Dr. D. Y. Patil Institute of Technology, Pimpri.
                <br />
                <br />
                  A Motivated and Hardworking individual,
                  I enjoy tackling new challenges and continuously expanding my skillset.
                  <br />
                  <br />My technical skills include programming in 
                    <b className="yellow"> Java, SQL </b>
                    and Web development technologies like
                    <b className="yellow"> HTML, CSS, JavaScript, React.js </b> 
                    as well as I am also familier with <b className="yellow">Data Structures </b> 
                     and
                    <b className="yellow"> Database Management sysytem.</b>
                  <br />
                  <br />
                  
                  I am also interested in building new
                  <i>
                    <b className="yellow"> Web Technologies and Products </b>
    
                  </i>
                  <br />
                  
                </p>
              </Col>
              <Col md={4} className="myAvtar">
                <Tilt>
                  <img src={LaptopImg} className="img-fluid" alt="avatar" />
                </Tilt>
              </Col>
            </Row>
            <Row>
              <Col md={12} className="home-about-social">
                <h1>FIND ME ON</h1>
                <p>
                Please don't hesitate to reach out to me and <span className="yellow">connect.</span>
                </p>
                <ul className="home-about-social-links">
                  <li className="social-icons">
                    <a
                      href="https://github.com/PranavDeshmukh233"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-colour  home-social-icons"
                      aria-label="github"
                    >
                      <AiFillGithub />
                    </a>
                  </li>
                  
                  <li className="social-icons">
                    <a
                      href="https://www.linkedin.com/in/pranav-deshmukh-016a44245/"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-colour  home-social-icons"
                      aria-label="linkedin"
                    >
                      <FaLinkedinIn />
                    </a>
                  </li>
                  
                </ul>
              </Col>
            </Row>
          </Container>
        </Container>
      );
    
}

export default About