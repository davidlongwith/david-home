import React from "react";
import Header from "./components/Header.js";
import AboutMe from "./components/AboutMe.js";
import Projects from "./components/ProjectList.js";
import "./css/app.css";
import data from "./data/projects.json";

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <AboutMe />
        <Projects projects={data} />
      </main>
    </div>
  );
}

export default App;
