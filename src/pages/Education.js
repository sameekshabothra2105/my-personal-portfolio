import React from "react";
import { motion, useScroll, useSpring } from "framer-motion";

const Education = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  return (
    <>
      <motion.div
        style={{ scaleX: scrollYProgress }}
        className="progress-bar-animate"
      />
      <div className="education">
        <h1>Education</h1>
        <>
          <article>
            <p>
             <h2>B.TECH (COMPUTER SCIENCE ENGINEERING)</h2>
              Shri Vaishnav Vidyapeeth Vishwavidyalaya 7.85 CGPA
            </p>
           
            <h2>HIGHER SECONDARY</h2>
            Morning Star Sr.Sec School,Ratlam,74.6%
            
            
            <h2>HIGH SCHOOL</h2>
            ST.Joseph Sr.Sec School,Ratlam,9CGPA 
            
            
    
          </article>
        </>
      </div>
    </>
  );
};

export default Education;