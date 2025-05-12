import React, { useState, useRef, useEffect } from "react";
import "./Header.css";

const sections = [
  { id: "home", label: "Home" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Get In Touch" },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const headerRef = useRef(null);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) section.scrollIntoView({ behavior: "smooth" });
    setActiveSection(id); // set manually to reflect active immediately
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        headerRef.current &&
        !headerRef.current.contains(event.target) &&
        window.innerWidth <= 767
      ) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting);
        if (visible) {
          setActiveSection(visible.target.id);
        }
      },
      { rootMargin: "0px 0px -40% 0px", threshold: 0.25 }
    );

    sections.forEach(({ id }) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav
      ref={headerRef}
      className={`header-container ${menuOpen ? "header-open" : ""}`}>
      <div className="header-div">
        <div className="logo-div">
          <a className="logo" onClick={() => scrollToSection("home")}>Sachin</a>
        </div>

        <div className="hamburger-menu" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? "✕" : "☰"}
        </div>

        <ul className={`nav-links ${menuOpen ? "show" : ""}`}>
          {sections.map(({ id, label }) => (
            <li
              key={id}
              className={`nav-link-item ${
                activeSection === id ? "active" : ""
              }`}
              onClick={() => scrollToSection(id)}>
              {label}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Header;
