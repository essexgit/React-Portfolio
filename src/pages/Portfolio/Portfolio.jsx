import React, { Fragment } from "react";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import CardWrapper from "../../components/CardWrapper";
// import Title from "../../components/Title";
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
        {/* <Title /> */}
        <ProjectList />
      </CardWrapper>
    </>
  );
};


export default Portfolio;
