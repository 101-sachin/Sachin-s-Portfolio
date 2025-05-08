import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Project from "./pages/Project/Project";
import Header from "./components/Header/Header";
import ScrollToEdgeButton from "./components/SrollNavigator/ScrollToEdgeButton";

const App = () => {
  return (
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/projects" element={<Project />} />
        </Routes>
        <ScrollToEdgeButton />
      </Router>
    
  );
};

export default App;
