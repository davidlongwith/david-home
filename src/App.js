import React from "react";
import "./css/app.css";
import Header from "./components/Header.js";
import AboutMe from "./components/AboutMe.js";
import Projects from "./components/Projects.js";

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <AboutMe />
        <Projects />
      </main>
    </div>
  );
}

export default App;
