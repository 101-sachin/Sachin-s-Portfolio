import React, { useState, useEffect } from "react";
import "./Skills.css";

const Skills = () => {
  const [skills, setSkills] = useState([]);
  const API_URL = "https://sachin-s-portfolio-gilt.vercel.app/skills";

  useEffect(() => {
    fetch(API_URL)
      .then((res) => {
        if (!res.ok) throw new Error("Network response was not ok");
        return res.json();
      })
      .then((data) => setSkills(data))
      .catch((error) => {
        console.error("Error fetching skills:", error);
        // Fallback skills if API fails
        setSkills([
          { name: "React.js", description: "Frontend development with React" },
          { name: "Node.js", description: "Backend development with Node.js" },
          { name: "Magento 2", description: "E-commerce development" },
          { name: "SQL / MongoDB", description: "Database management" }
        ]);
      });
  }, []);

  return (
    <section className="skills-section" id="skills">
      <h2 className="section-title">Skills</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill-card">
            <h3>{skill.name}</h3>
            <p>{skill.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
