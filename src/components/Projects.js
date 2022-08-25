import React from "react";
import "../css/projects.css";
import ProjectEntry from "./ProjectEntry.js";

// display Projects section and create projects list
const Projects = ({ projectsData }) => (
  <section className="section-wrapper">
    <h1 className="section-header">Featured Projects</h1>
    <div className="project-list">
      {projectsData.length === 0 ? (
        <p>Oops! No projects listed</p>
      ) : (
        projectsData.map((project) => (
          <ProjectEntry key={project.title} {...project} />
        ))
      )}
    </div>
  </section>
);

export default Projects;
