import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  const handleNavClick = (id, route) => {
    setMenuOpen(false);
    if (location.pathname === "/" || location.pathname === "/home") {
      scrollToSection(id);
    } else {
      navigate(`/${route}`);
    }
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className={`header-container ${menuOpen ? "header-open" : ""}`}>
      <div className="header-div">
        <div className="logo-div">
          <a href="/">Sachin</a>
        </div>

        <div className="hamburger-menu" onClick={toggleMenu}>
          {menuOpen ? "✕" : "☰"}
        </div>

        <ul className={`nav-links ${menuOpen ? "show" : ""}`}>
          <li
            className="nav-link-item"
            onClick={() => handleNavClick("home", "")}
          >
            Home
          </li>
          <li
            className="nav-link-item"
            onClick={() => handleNavClick("projects", "projects")}
          >
            Projects
          </li>
          <li
            className="nav-link-item"
            onClick={() => handleNavClick("skills", "skills")}
          >
            Skills
          </li>
          <li
            className="nav-link-item"
            onClick={() => handleNavClick("experience", "experience")}
          >
            Experience
          </li>
          <li
            className="nav-link-item"
            onClick={() => handleNavClick("contact", "contact")}
          >
            Get In Touch
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
