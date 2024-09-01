import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi, I am <span className="purple">Saurav sharma </span>
            from <span className="purple"> Darbhanga, India.</span>
            <br /> As a Computer Science Engineering graduate specializing in
            cybersecurity, I am deeply passionate about leveraging my coding
            skills to address real-world challenges and enhance digital
            security. My journey has been marked by diverse experiences across
            multiple domains, including cybersecurity, web development, software
            development, and testing. During my internships with the All India
            IT Association, MP Police Cyber Cell, Persistent Systems, and Oasis
            Infobyte, I gained invaluable hands-on experience that has shaped my
            technical expertise and problem-solving abilities. Each role
            provided unique opportunities to develop my skills and contribute to
            meaningful projects. In addition to my practical experience, I have
            pursued further education through certifications like the IBM
            Cybersecurity Professional Certification and the Meta Frontend
            Development course. These programs have equipped me with a robust
            foundation in both cybersecurity and front-end development, enabling
            me to create secure and intuitive digital experiences. I am eager to
            apply my knowledge and skills in a challenging role where I can
            continue to learn, grow, and make a positive impact on the digital
            world. <br />
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
