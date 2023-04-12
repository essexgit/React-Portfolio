import React, { Fragment } from "react";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import CardWrapper from "../../components/CardWrapper/Cardwrapper";
import Project from "./projects.json";


const ProjectList = () => {
  return (
    Project.map((card) => (
      <ProjectCard {...card} key={card.id} />
    )));
};

const Portfolio = () => {

  return (
    <>
      <CardWrapper>
        <ProjectList />
      </CardWrapper>
    </>
  );
};


export default Portfolio;
