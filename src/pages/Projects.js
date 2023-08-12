import React from "react";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <div className="home">
      <motion.div
        className="name"
        initial={{
          x: -300,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          scale: 1,
        }}
        transition={{ duration: 1 }}
      >
        Personal <font color="yellow">Portfolio</font>
      </motion.div>
      <motion.div
        className="desc"
        initial={{
          x: 300,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          scale: 1,
        }}
        transition={{ duration: 1 }}
      >
       
      </motion.div>

      {/* Technology used box */}
      <motion.div
        className="technology-box"
        initial={{
          opacity: 0,
          y: 50,
          width: 0,
          height: 0,
        }}
        animate={{
          opacity: 1,
          y: 0,
          width: "200px",
          height: "200px",
        }}
        transition={{ duration: 1.5 }}
      >
        <h2>Technology used</h2>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>React</li>
        </ul>
      </motion.div>

      {/* Project Description box */}
      <motion.div
        className="description-box"
        initial={{
          opacity: 0,
          y: 50,
          width: 0,
          height: 0,
        }}
        animate={{
          opacity: 1,
          y: 0,
          width: "400px",
          height: "200px",
        }}
        transition={{ duration: 1.5 }}
      >
        <h2>Description</h2>
        <p>
          This is a project where I developed a web application for managing
          tasks and projects. It allows users to create, update, and delete
          tasks, set deadlines, and track progress. The application is built
          using React for the frontend and Node.js for the backend.
        </p>
      </motion.div>
    </div>
  );
};

export default Home;