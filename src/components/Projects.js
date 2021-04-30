import React from "react";
import ProjectDiv from "./ProjectDiv.js";

// display Projects section and create projects list
const Projects = ({ projectsData }) => (
  <section className="section-wrapper">
    <h1 className="section-header">Projects</h1>
    <div className="project-list">
      {projectsData.length === 0 ? (
        <p>Oops! No projects listed</p>
      ) : (
        projectsData.map((project) => (
          <ProjectDiv key={project.name} {...project} />
        ))
      )}
    </div>
  </section>
);

export default Projects;
