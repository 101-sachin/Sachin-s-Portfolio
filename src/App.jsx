import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { WindowSizeContextProvider } from "./context/WindowSizeContext";
import Home from "./pages/Home/Home";
import Project from "./pages/Project/Project";
import Header from "./components/Header/Header";
import ScrollToEdgeButton from "./components/SrollNavigator/ScrollToEdgeButton";

const App = () => {
  return (
    <WindowSizeContextProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/projects" element={<Project />} />
        </Routes>
        <ScrollToEdgeButton />
      </Router>
    </WindowSizeContextProvider>
  );
};

export default App;
