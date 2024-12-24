import React from 'react';
import { motion } from 'framer-motion';
import '../CSS/Header.css'
import civilImage from '../Images/civil.jpg';
import softwareImage from '../Images/software.jpg'
import chemicalImage from '../Images/chemical.jpg'

const UGCourses = () => {
  return (
    <div>
      <div className="UG">
        <h1>UG COURSES @ ANNA UNIVERSITY</h1>
      </div>
      <br />
      <div className="container">
        <motion.div
          className="box1"
          initial={{ opacity: 0, scale: 0.9 }} // Start with opacity 0 and 0.9 scale
          animate={{ opacity: 1, scale: 1 }}  // Animate to opacity 1 and normal scale
          transition={{ duration: 0.6, ease: 'easeOut' }} // Animation duration and easing
          whileHover={{ scale: 1.05, rotateY: 10 }} // 3D effect on hover
          whileTap={{ scale: 0.95 }} // Slightly shrink on click
        >
        <img src={civilImage} alt="Civil Engineering" />
        <br />
          <br />
          <h3>Civil Engineering</h3>
          <br />
          <p>A Civil Engineer specializes in a wide range of engineering fields. Civil Engineering involves designing, developing, building, and testing.</p>
        </motion.div>
        <motion.div
          className="box2"
          initial={{ opacity: 0, scale: 0.9 }} // Start with opacity 0 and 0.9 scale
          animate={{ opacity: 1, scale: 1 }}  // Animate to opacity 1 and normal scale
          transition={{ duration: 0.6, ease: 'easeOut' }} // Animation duration and easing
          whileHover={{ scale: 1.05, rotateY: 10 }} // 3D effect on hover
          whileTap={{ scale: 0.95 }} // Slightly shrink on click
        >
<img 
  src={softwareImage} 
  alt="Software Engineering" 
  style={{ width: '80%', height: '200px' }} // Adjust the width as needed
/>
        <br />
          <br />
          <h3>Software Engineering</h3>
          <br />
          <p>Software engineering deals with “light current” applications such as telephone and radio communication, computers, radar, and automatic control systems.</p>
        </motion.div>
        <motion.div
          className="box3"
          initial={{ opacity: 0, scale: 0.9 }} // Start with opacity 0 and 0.9 scale
          animate={{ opacity: 1, scale: 1 }}  // Animate to opacity 1 and normal scale
          transition={{ duration: 0.6, ease: 'easeOut' }} // Animation duration and easing
          whileHover={{ scale: 1.05, rotateY: 10 }} // 3D effect on hover
          whileTap={{ scale: 0.95 }} // Slightly shrink on click
        >
        <img src={chemicalImage} alt="chemical Engineering" />
          <br />
          <br />
          <h3>Chemical Engineering</h3>
          <br />
          <p>Chemical engineering usually deals with areas including writing software and firmware for embedded microcontrollers, designing VLSI chips, analog sensors, mixed signal circuit boards, and operating systems.</p>
        </motion.div>
      </div>
    </div>
  );
};

export default UGCourses;
