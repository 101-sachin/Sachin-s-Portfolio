import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Home from "./pages/Home/Home";
import Project from "./pages/Project/Project";
import Header from "./components/Header/Header";
import ScrollToEdgeButton from "./components/SrollNavigator/ScrollToEdgeButton";
import Skills from "./pages/Skills/Skills";
import Experience from "./pages/Experience/Experience";
import Contact from "./pages/Contact/Contact";

const App = () => {
  return (
    <Router>
      <Header />

    
      <main>
        <section id="home">
          <Home />
        </section>

        <section id="projects">
          <Project />
        </section>

        <section id="skills">
          <Skills />
        </section>

        <section id="experience">
          <Experience />
        </section>

        <section id="contact">
          <Contact />
        </section>
      </main>

      <ScrollToEdgeButton />
    </Router>
  );
};

export default App;
