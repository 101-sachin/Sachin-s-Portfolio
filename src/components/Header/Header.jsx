import React from "react";
import "./Header.css";

const Header = () => (
  <nav className="header-container">
    <div className="header-div">
      <div className="logo-div">
       <a href="/home">Sachin</a>
      </div>
      <ul className="header-link-container">
        <li className="header-link-item"><a href="/home">Home</a></li>
        <li className="header-link-item"><a href="/Projects">Projects</a></li>
        <li className="header-link-item"><a href="/Skills">Skills</a></li>
        <li className="header-link-item"><a href="/Experience">Experience</a></li>
        <li className="header-link-item"><a href="/Get In Touch">Get In Touch</a></li>
      </ul>
    </div>
  </nav>
);

export default Header;
