import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Userauthentication from "../../Assets/Projects/userauthentication.png";
import Blogpage from "../../Assets/Projects/blogpage.png";
import Weatherapp from "../../Assets/Projects/weatherapp.png";
import Businesscard from "../../Assets/Projects/Businesscard.png";
import Drumkit from "../../Assets/Projects/drumkit.png";
import Keylogger from "../../Assets/Projects/keylogger.png";

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
              imgPath={Businesscard}
              isBlog={false}
              title="QR-code and Business-card generator"
              description="QR-code Business-Card generator is a web app made with vue.js where user will be able to generate the QR-code and business-card."
              ghLink=""
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Keylogger}
              isBlog={false}
              title="Keylogger"
              description="It is a python script which stores the keystrokes of the user keyboard for the purpose of gaining information about the user without the user's knowledge."
              ghLink=""
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Weatherapp}
              isBlog={false}
              title="Weather app"
              description="It tells the weather condition of the particular location. it is developed using HTML , CSS , JS."
              ghLink=""
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Userauthentication}
              isBlog={false}
              title="User-Authentication"
              description="User authentication verifies the identity of a user attempting to gain access to a network or computing resource by authorizing. it is made with node.js and passport.js"
              ghLink=""
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Drumkit}
              isBlog={false}
              title="Drumkit"
              description="It is the basic drumkit app made using HTML , CSS , JS where user can play various drum using the keystrokes."
              ghLink=""
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Blogpage}
              isBlog={false}
              title="Blogpage"
              description="It is a basic blog page where user can compose their daily blogs and save it. it is made with Node js and ejs."
              ghLink=""
              // demoLink=""      <--------Please include a demo link here
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
