import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import { data } from "autoprefixer";

const Home = () => {
  const [profile, setProfile] = useState({
    name: "",
    title: "",
    intro: "",
  });

  useEffect(() => {
    var data = fetch("https://sachin-s-portfolio-gilt.vercel.app/home")
      .then((res) => res.json())
      .then((data) => {
        if (data && data.length > 0) setProfile(data[0]);
      });
  }, []);

  console.log(data[0])

  return (
    <section className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-4 py-8">
      <Header />
      <div className="flex flex-col items-center w-full max-w-md">
        {/* <img
          src={profileImg}
          alt={profile.name}
          className="w-36 h-36 rounded-full object-cover mb-4 border-4 border-neutral-800"
        /> */}
        <h1 className="text-2xl font-bold mb-1">
          {profile.name || "Your Name"}
        </h1>
        <h2 className="text-lg font-semibold mb-2">
          {profile.title || "Frontend Developer"}
        </h2>
        <p className="text-sm text-gray-300 mb-4 text-center">
          {profile.intro || "Intro text goes here."}
        </p>
        <a
          href="/resume.pdf"
          className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-6 rounded-lg shadow-lg transition mb-6"
          download
        >
          Download Resume &rarr;
        </a>
      </div>
    </section>
  );
};

export default Home;
