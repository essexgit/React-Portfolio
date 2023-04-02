import React, { Component } from "react";
import ProjectCard from "../components/ProjectCard/ProjectCard";
import CardWrapper from "../components/CardWrapper/CardWrapper";
import Title from "../components/Title/Title";
import Projects from "../assets/projects.json";

class Portfolio extends Component {
  state = {
    Projects
  };
  render() {
    return (
      <div>
        <CardWrapper>
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
        </CardWrapper>
      </div>
    );
  }
}

export default Portfolio;
