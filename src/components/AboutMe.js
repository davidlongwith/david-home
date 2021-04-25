import React from "react";
import avatar from "../images/image.jpg";
import "../css/aboutme.css";

const AboutMe = () => (
  <section className="section-wrapper">
    <h1 className="section-header">About me</h1>
    <div className="about-me-content">
      <img src={avatar} alt="" />
      <p>
        My name is David Longwith. I am a front end web developer located in
        Richmond, Virginia USA. My expertise is in HTML, CSS, JavaScript, and
        React. Experienced in all stages of web site and application development
        from concept to deployment.
      </p>
    </div>
  </section>
);

export default AboutMe;
