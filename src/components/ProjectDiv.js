import React from "react";

// display individual project content
const ProjectDiv = ({ title, description }) => (
  <div>
    <p>
      {title}
      <br />
      {description}
    </p>
  </div>
);

export default ProjectDiv;
