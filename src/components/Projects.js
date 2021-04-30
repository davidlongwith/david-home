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
            project name: {project.name} project description:{" "}
            {project.description}
          </li>
        ))
      )}
    </div>
  </section>
);

export default Projects;
