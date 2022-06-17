import React from "react";
import Card from "../Card/Card";

import projects from "../../data/projects";

import "./Projects.scss";

const Projects = () => {
  return (
    <div className="projects">
      <h1 className="projects__header">My Projects</h1>
      <div className="projects__wrapper">
        {projects.map((project) => (
          <Card key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
