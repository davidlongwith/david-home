import React from "react";

// display individual project content
const ProjectDiv = ({ title, description, link }) => (
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

export default ProjectDiv;
