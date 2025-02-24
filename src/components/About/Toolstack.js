import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiEclipseide,
  SiMysql,
  SiTableau,
  SiMicrosoftoffice,
  SiRstudio,
  SiJupyter,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode size={80} color="#007ACC" />
        <p>VS Code</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiEclipseide size={80} color="#2C2255" />
        <p>Eclipse IDE</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMysql size={80} color="#00758F" />
        <p>MySQL Workbench</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTableau size={80} color="#E97627" />
        <p>Tableau</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMicrosoftoffice size={80} color="#D83B01" />
        <p>Excel</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiRstudio size={80} color="#75AADB" />
        <p>RStudio</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiJupyter size={80} color="#F37626" />
        <p>Jupyter Notebook</p>
      </Col>
    </Row>
  );
}

export default Toolstack;
