import React from "react";
import "./css/App.css";
import Header from "./components/Header.js";
import AboutMe from "./components/AboutMe.js";
import Projects from "./components/Projects.js";

function App() {
  return (
    <div className="App">
      <Header />
      <AboutMe />
      <Projects />
    </div>
  );
}

export default App;
