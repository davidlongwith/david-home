import React from "react";
import "../css/projects.css";

// display individual project content
const ProjectEntry = ({ title, description, link }) => (
  <div>
    <div>
      <p>{title}</p>
    </div>
    <div>
      <p>{description}</p>
    </div>
    <div>
      <a href={link}>Live</a>
    </div>
  </div>
);

export default ProjectEntry;
