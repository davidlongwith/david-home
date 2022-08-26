import React from "react";
import Header from "./components/Header.js";
import AboutMe from "./components/AboutMe.js";
import Projects from "./components/Projects.js";
import Footer from "./components/Footer.js";
import "./css/app.css";
import data from "./data/projects.json";

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <AboutMe />
        <Projects projectsData={data} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
