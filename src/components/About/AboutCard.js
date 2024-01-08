import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Saurav sharma </span>
            from <span className="purple"> Bhopal, India.</span>
            <br /> A dedicated and adaptable individual pursuing a
            B.Tech in Computer Science at Oriental College of Technology.
            I have a strong passion for developing innovative solutions, and
            this drive has led me to create numerous projects from scratch,
            which I you can walk through  on this page. I eagerly embrace
            change and view it as an opportunity for personal growth and
            innovation. My creativity fuels my approach to problem-solving,
            allowing me to find unique solutions to complex challenges.
            Effective communication is another forte, enabling me to articulate
            ideas clearly, whether presenting user interface designs or
            collaborating with cross-functional teams. Effective time management
            further complements my skill set, allowing me to efficiently handle
            multiple responsibilities. <br />
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Listning Music
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          {/* <footer className="blockquote-footer">Saurav sharma</footer> */}
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
