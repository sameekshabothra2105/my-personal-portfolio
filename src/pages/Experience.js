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
        Allsoft <font color="yellow">Technology</font>
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
        <h2>Road Lane Detection Project</h2>
        <p>
        Role-Intern
        January 2023-May 2023
        ROAD LANE DETECTION PROJECT
        This project showcased my expertise in computer vision, deep
        learning, and algorithm development.
        It also highlighted my ability to tackle complex problems, work
        collaboratively, and deliver high-quality results.
        Overall, the road lane detection project demonstrated my
        commitment to leveraging cutting-edge technologies to solve
        real-world challenges in the field of autonomous vehicles and
        intelligent transportation systems.
        </p>
      </motion.div>
    </div>
  );
};

export default Home;