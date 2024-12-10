import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import gdsc from "../../Assets/Projects/gdsc.png";
import iete from "../../Assets/Projects/iete.png";
import portfolio from "../../Assets/Projects/portfolio.png";
import todo from "../../Assets/Projects/todo.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Projects </strong>
        </h1>
        {
            
        }
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={gdsc}
              isBlog={false}
              title="GDSC Website"
              description="Contributed to the official Thapar GDSC Website"
              ghLink="https://github.com/developer-student-club-thapar/Society-Website"
              demoLink="https://www.gdsctiet.in"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={iete}
              isBlog={false}
              title="2D NINJA GAME"
              description="2D ninja game, where 2 players can play a attack based ninja game on the same computer"
              ghLink="https://github.com/HARSHGUPTA3009/Iete-societyfair-project"
              demoLink="https://iete-societyfair-project.vercel.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={portfolio}
              isBlog={false}
              title="MY PORTFOLIO"
              description="My Portfolio website"
              ghLink="https://github.com/HARSHGUPTA3009/portfolio"
              demoLink="https://portfolio-harshgupta3009s-projects.vercel.app/project"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={todo}
              isBlog={false}
              title="TODO APP"
              description="A React based Todo app"
              ghLink="https://github.com/HARSHGUPTA3009/Todo"
              demoLink="https://todo-vercel-seven.vercel.app"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
