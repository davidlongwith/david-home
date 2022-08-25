import React from "react";
import avatar from "../images/image.jpg";
import "../css/aboutme.css";

const AboutMe = () => (
  <section className="section-wrapper">
    <h1 className="section-header">About me</h1>
    <div className="about-me-content">
      <img src={avatar} alt="" />
      <p>
        My name is David Longwith. I develop web sites and applications at all
        stages from concept to deployment. My expertise is primarly focused on
        front-end technologies such as HTML/CSS, JavaScript, and the React
        Framework.
      </p>
    </div>
  </section>
);

export default AboutMe;
