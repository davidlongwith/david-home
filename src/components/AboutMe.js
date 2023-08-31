import React from "react";
import AboutMePic from "../images/600x600_lite.jpg";
import "../css/aboutme.css";

const AboutMe = () => (
  <section className="section-wrapper">
    <h1 className="section-header">About me</h1>
    <div className="about-me-content">
      <img src={AboutMePic} alt="" />
      <p>
        Hello, I'm David Longwith—an enthusiastic web developer who enjoys bringing digital ideas to life, all the way from conceptualization to deployment. I have a solid grasp of frontend technologies like HTML, CSS, and JavaScript, and I've had rewarding experiences using the React Framework to build user-friendly interfaces. Additionally, I have a keen interest in exploring the exciting realm of web-based 3D graphics, always thinking about the next cool project.
      </p>
    </div>
  </section>
);

export default AboutMe;
