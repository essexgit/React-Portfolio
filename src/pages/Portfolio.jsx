import React, { Component } from "react";
import ProjectCard from "../components/ProjectCard/projectcard";
import Wrapper from "../components/CardWrapper/cardwrapper";
import Title from "../components/Title/title";
import Projects from "../assets/projects.json";

class Portfolio extends Component {
  state = {
    Projects
  };
  render() {
    return (
      <div>
        <Wrapper>
          <Title>Project Gallery</Title>
          {this.state.Projects.map(project => (
            <ProjectCard
              id={project.id}
              key={project.id}
              image={project.image}
              Title={project.Title}
              Github={project.Github}
              Deployment={project.Deployment}
            />
          ))}
        </Wrapper>
      </div>
    );
  }
}

export default Portfolio;
