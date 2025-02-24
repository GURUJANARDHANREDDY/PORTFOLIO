import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.png";

import Tilt from "react-parallax-tilt";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              Hi, I'm <b className="purple">Janardhan Reddy</b>, a passionate  Integrated M.Tech Data Science student with expertise in software development and AI.
              <br />
              <br />I have hands-on experience in:
              <i>
    <b className="purple"> Hands-on experience with Java, Python, SQL, Advanced Excel, Tableau, and MERN Stack through projects and coursework. </b>
</i>

              <br />
              
              <br />My areas of interest include:
<i>
  <b className="purple">
    Machine Learning, Web Development, Data Visualization (Tableau), Data Analytics (Excel), and SQL Databases.
  </b>
</i>


              
              <br />
              <br />I have worked on projects involving
              <b className="purple"> Facial Recognition,Movie Booking System,Smart Attendance System ,Resturant reservation system and currently working on Agile Project Management Dashboards</b>.
              <br />
              <br />I also enjoy working with
<b className="purple"> Node.js</b> and modern frameworks like
<i>
  <b className="purple"> React.js</b>
</i>, along with data analytics and visualization using  
<b className="purple"> Tableau and Excel</b>, as well as developing robust database systems using  
<b className="purple"> SQL (MySQL) and MongoDB</b>.

            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect</span> with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/GURUJANARDHANREDDY"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/hanumanthu-gari-guru-janardhan-reddy-7b04b6223/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
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

export default Home2;
