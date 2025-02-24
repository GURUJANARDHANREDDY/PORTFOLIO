import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Integrated M.Tech Data Science Student",
          "Full Stack Developer",
          "AI & Machine Learning Enthusiast",
          "Spring Boot & Java Developer",
          "Passionate Problem Solver",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
