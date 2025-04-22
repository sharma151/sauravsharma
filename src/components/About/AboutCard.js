import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify", textJustify: "inter-word" }}>
            Hi, I am <span className="purple">Saurav sharma </span>
            from <span className="purple"> Darbhanga, India.</span>
            <br />I am currently working as a Frontend Developer at Young
            Innovation Pvt. Ltd., Nepal, where I focus on building secure,
            user-friendly, and scalable web applications. With a background in
            Computer Science Engineering and a specialization in cybersecurity,
            I am passionate about applying my coding skills to solve real-world
            problems and strengthen digital security.
            <br />
            <br />
            My journey has included hands-on experiences across cybersecurity,
            web development, software development, and testing. I’ve interned
            with organizations like the All India IT Association, MP Police
            Cyber Cell, Persistent Systems, and Oasis Infobyte, each of which
            enriched my technical expertise and problem-solving capabilities
            through meaningful project work.
            <br />
            <br /> I have also pursued professional development through
            certifications like the IBM Cybersecurity Professional Certification
            and the Meta Frontend Development course. These have equipped me
            with a strong foundation in both cybersecurity and frontend
            technologies, enabling me to deliver secure and intuitive digital
            experiences. I am enthusiastic about continuous learning and am
            eager to contribute to innovative projects that make a positive
            impact on the digital world. <br />
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
              <ImPointRight /> Hikking / Trekking
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
