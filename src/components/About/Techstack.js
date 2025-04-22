import React from "react";
import { Col, Row } from "react-bootstrap";
import { DiJavascript1, DiReact, DiGit, DiSass } from "react-icons/di";
import { FaVuejs } from "react-icons/fa";
import {
  SiTailwindcss,
  SiAntdesign,
  SiReactquery,
  SiTypescript,
  SiHtml5,
} from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiHtml5 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTailwindcss />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiSass />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTypescript />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiReactquery />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaVuejs />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiAntdesign />
      </Col>
      
    </Row>
  );
}

export default Techstack;
