import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useWindowSize } from '../../context/WindowSizeContext';
import './Header.css';

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { isMobile, isTablet, isDesktop } = useWindowSize();
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) section.scrollIntoView({ behavior: 'smooth' });
  };

  const handleNavClick = (id, route) => {
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
    <nav className={`header-container ${menuOpen ? 'header-open' : ''}`}>
      <div className="header-div">
        <div className="logo-div">
          <a href="/">Sachin</a>
        </div>

        {(isMobile || isTablet) && (
          <div className="hamburger-menu" onClick={toggleMenu}>
            {menuOpen ? 'X' : '☰'}
          </div>
        )}

        {isDesktop && (
          <div className='header-link-group'>
          <ul className="header-link-container">
            <li className="header-link-item" onClick={() => handleNavClick("home", "")}>Home</li>
            <li className="header-link-item" onClick={() => handleNavClick("projects", "projects")}>Projects</li>
            <li className="header-link-item" onClick={() => handleNavClick("skills", "skills")}>Skills</li>
            <li className="header-link-item" onClick={() => handleNavClick("experience", "experience")}>Experience</li>
            <li className="header-link-item" onClick={() => handleNavClick("contact", "contact")}>Get In Touch</li>
          </ul>
          </div>
        )}
      </div>

      {(isMobile || isTablet) && menuOpen && (
        <div className="mobile-menu">
          <ul className="mobile-header-link-container">
            <li className="mobile-header-link-item" onClick={() => handleNavClick("home", "")}>Home</li>
            <li className="mobile-header-link-item" onClick={() => handleNavClick("projects", "projects")}>Projects</li>
            <li className="mobile-header-link-item" onClick={() => handleNavClick("skills", "skills")}>Skills</li>
            <li className="mobile-header-link-item" onClick={() => handleNavClick("experience", "experience")}>Experience</li>
            <li className="mobile-header-link-item" onClick={() => handleNavClick("contact", "contact")}>Get In Touch</li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Header;
