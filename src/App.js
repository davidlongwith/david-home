import React from "react";
import Header from "./components/Header.js";
import AboutMe from "./components/AboutMe.js";
import Projects from "./components/Projects.js";
import "./css/app.css";

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
