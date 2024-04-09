import React from "react";
import "./Intro.css";

const Intro = ({ title, introduction }) => {
  return (
    <div className="intro">
      <div className="intro-content">
        <h1>{title}</h1>
        <p>{introduction}</p>
      </div>
    </div>
  );
};

export default Intro;
