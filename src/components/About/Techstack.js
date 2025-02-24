import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiJava,
  DiMongodb,
  DiPython,
} from "react-icons/di";
import { SiMysql, SiTableau, SiMicrosoftoffice } from "react-icons/si"; // ✅ Using Microsoft Office for Excel

const techStackData = [
  { icon: DiJava, name: "Java", color: "#007396" },
  { icon: DiPython, name: "Python", color: "#3776AB" },
  { icon: DiJavascript1, name: "JavaScript", color: "#F7DF1E" },
  { icon: DiMongodb, name: "MongoDB", color: "#4DB33D" },
  { icon: SiMysql, name: "MySQL", color: "#00758F" },
  { icon: SiMicrosoftoffice, name: "Advanced Excel", color: "#D83B01" }, // ✅ Microsoft Office color
  { icon: SiTableau, name: "Tableau", color: "#E97627" },
];

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {techStackData.map((tech, index) => (
        <Col key={index} xs={4} md={2} className="tech-icons">
          <tech.icon size={80} style={{ color: tech.color }} />
          <p className="tech-name">{tech.name}</p>
        </Col>
      ))}
    </Row>
  );
}

export default Techstack;
