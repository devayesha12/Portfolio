import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
  <Card.Body>
    <blockquote className="blockquote mb-0">
      <p style={{ textAlign: "justify" }}>
        Hi everyone! I’m <span className="purple">Ayesha Noor</span>{" "}
        from <span className="purple">Faisalabad, Pakistan</span>.
        <br />
        I’m a <span className="purple">Full Stack Developer</span> specializing
        in <span className="purple">MERN Stack</span>, and I build
        responsive, scalable web applications.
        <br />
        I hold a <span className="purple">BS in Software Engineering</span> from{" "}
        <span className="purple">Virtual University of Pakistan</span>.
        <br />
        <br />
        Outside of coding, I enjoy activities that keep me creative and inspired:
      </p>

      <ul>
        <li className="about-activity">
          <ImPointRight /> Building Personal Projects & Web Apps 💻
        </li>
        <li className="about-activity">
          <ImPointRight /> Exploring New Web Technologies 🚀
        </li>
        <li className="about-activity">
          <ImPointRight /> Reading, Traveling & Photography 🌍
        </li>
      </ul>

      <p style={{ color: "rgb(155 126 172)" }}>
        "Strive to build web solutions that make a real impact!"{" "}
      </p>
      <footer className="blockquote-footer">Ayesha Noor</footer>
    </blockquote>
  </Card.Body>
</Card>

  );
}

export default AboutCard;
