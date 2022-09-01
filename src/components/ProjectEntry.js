import React from "react";
import "../css/project-entry.css";

// display individual project content
const ProjectEntry = ({ title, description, link }) => (
  <div className="entry-container">
    <div className="project-title">
      <p>{title}</p>
    </div>
    <div className="project-description">
      <p>{description}</p>
    </div>
    <div className="project-link">
      <a href={link} target="_blank" rel="noreferrer">
        LIVE
      </a>
    </div>
  </div>
);

export default ProjectEntry;
