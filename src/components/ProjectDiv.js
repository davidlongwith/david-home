import React from "react";

// display individual project content
const ProjectDiv = ({ name, description }) => (
  <div>
    <p>
      {name}
      <br />
      {description}
    </p>
  </div>
);

export default ProjectDiv;
