import React from "react";

const Projects = ({ projectsData }) => (
  <section className="section-wrapper">
    <h1 className="section-header">Projects</h1>
    <div className="project-list">
      {projectsData.length === 0 ? (
        <p>Opps! No projects listed</p>
      ) : (
        projectsData.map((project) => (
          <li key={project.name}>
            <p>{project.name}</p>
            <p>{project.description}</p>
          </li>
        ))
      )}
    </div>
  </section>
);

export default Projects;
