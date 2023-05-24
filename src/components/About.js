import React from "react";
import Profile from "../assets/profile.jpg"
import "../styles/navbar.css"

const About = () => {
  return (
    <div className="flex justify-content-center flex-column align-items margin-10px">
      <div className="gradient2 border-radius-15 border-box-shadow flex justify-content-center flex-column align-items padding-20px max-width-400px">
        <div className="border-box-shadow-inset padding-5px border-radius-20">
      <img
        className="max-width-200px border-radius-20"
        src={Profile}
        alt="Scott's Profile"
      />
      </div>
      <div className="bg-color-light-cadet margin-20px border-radius-15 border-box-shadow">
        <p className="text-align color-white padding-20px">
        Hello, my name is Scott Swiger, a Quality Engineer with Hims and Hers with a focus on full stack software Engineering. I have a Bachelors in Computer Sceience 
        and a passion for solving complex problems with software solutions.
        </p>
      </div>
      </div>
    </div>
  );
};

export default About;