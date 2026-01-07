import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";

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
  I’m a Full Stack Developer who loves transforming ideas into responsive,
  scalable web applications. I enjoy building user-friendly interfaces and
  reliable backend systems that solve real-world problems.
  <br />
  <br />
  I’m proficient in
  <i>
    <b className="purple">
      {" "}
      HTML, CSS, JavaScript, TypeScript, React.js, Next.js, Node.js, and Express.js{" "}
    </b>
  </i>
  — and I enjoy working across both frontend and backend development.
  <br />
  <br />
  My key areas of interest include developing
  <i>
    <b className="purple">
      {" "}
      Full Stack Web Applications, MERN Stack Projects,{" "}
    </b>
  </i>
  and creating fast, accessible, and modern user experiences.
  <br />
  <br />
  Whenever possible, I love building projects with
  <b className="purple"> React.js </b> and{" "}
  <b className="purple">Next.js</b> on the frontend and{" "}
  <i>
    <b className="purple">Node.js</b> and{" "}
    <b className="purple">MongoDB</b> on the backend.
  </i>
</p>


          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
