import React, { useEffect, useState } from "react";
import Loader from "../../components/Loader/Loader";
import "./Home.css";
import { FaLinkedin, FaGithub, FaTwitter, FaEnvelope } from "react-icons/fa";

const Home = () => {
  const API_URL = "https://sachin-s-portfolio-gilt.vercel.app/home";
  const [profile, setProfile] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(API_URL)
      .then((res) => {
        if (!res.ok) throw new Error("Network response was not ok");
        return res.json();
      })
      .then((data) => setProfile(data[0]))
      .catch(() => setError("Failed to load profile."));
  }, []);

  if (!profile) {
    return <Loader />;
  }

  return (
    <section className="home-container">
      <div className="home-content">
        <div className="left-content">
          <h2 className="profile-name">{profile.name}</h2>
          <h4 className="profile-title">{profile.title}</h4>
          <p className="profile-intro">{profile.intro}</p>
          <a href="#" className="resume-button" download>
            Download Resume
          </a>
          <div className="social-icons">
            {profile.social_media?.linkedin && (
              <a
                href={profile.social_media.linkedin}
                className="icons"
                target="_blank"
                
              >
                <FaLinkedin />
              </a>
            )}
            {profile.social_media?.github && (
              <a
                href={profile.social_media.github}
                className="icons"
                target="_blank"
                
              >
                <FaGithub />
              </a>
            )}
            {profile.social_media?.x && (
              <a
                href={profile.social_media.x}
                className="icons"
                target="_blank"
               
              >
                <FaTwitter />
              </a>
            )}
            {profile.social_media?.mail && (
              <a
                href={`mailto:${profile.social_media.mail}`}
                className="icons"
                target="_blank"
                
              >
                <FaEnvelope />
              </a>
            )}
          </div>
        </div>
        <div className="right-content">
          <img
            src="src/assets/photo.png"
            alt="Profile"
            className="profile-image"
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
