import React from "react";
import Project from "./Project.js";
import "../css/projects.css";
import data from "./../data/projects.json";

const ProjectList = ({ data }) => (
  <section className="section-wrapper">
    <h2 className="section-header">Projects</h2>
    <Project />
  </section>
);

export default ProjectList;
