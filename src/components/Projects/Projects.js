import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import movieSystem from "../../Assets/Projects/movieSystem.png";
import facialRecognition from "../../Assets/Projects/facialRecognition.png";
import attendanceSystem from "../../Assets/Projects/attendanceSystem.png";
import reservationSystem from "../../Assets/Projects/reservationSystem.png";
import agileDashboard from "../../Assets/Projects/agileDashboard.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={movieSystem}
              isBlog={false}
              title="Movie Booking System"
              description="A complete movie booking system built using Spring Boot, MySQL, and React, supporting user authentication, seat selection, and online payments."
              ghLink="https://github.com/GURUJANARDHANREDDY/movieSystem"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={facialRecognition}
              isBlog={false}
              title="Facial Recognition Using Backpropagation"
              description="Implemented a facial recognition system using a backpropagation algorithm for improved accuracy in identifying individuals."
              ghLink="https://github.com/GURUJANARDHANREDDY/facialrecognitionusingbackpropagation-algorithm"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={attendanceSystem}
              isBlog={false}
              title="Smart Attendance System"
              description="A real-time face recognition-based attendance system developed using Python, OpenCV, and Streamlit. Reduces manual work and enhances accuracy."
              ghLink="https://github.com/GURUJANARDHANREDDY/smart--attendance-system"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={reservationSystem}
              isBlog={false}
              title="Restaurant Reservation System"
              description="Developed a full-stack restaurant reservation system using MERN stack, allowing users to book tables online and manage reservations efficiently."
              ghLink="https://github.com/GURUJANARDHANREDDY/frontend123"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={agileDashboard}
              isBlog={false}
              title="Agile Management Dashboard"
              description="Currently working on an Agile management dashboard that helps teams track project progress, assign tasks, and manage sprints effectively."
              ghLink="https://github.com/GURUJANARDHANREDDY/Agile-management-Dashboard"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
