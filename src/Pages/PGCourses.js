import React from 'react';
import '../CSS/Header.css'; 
import mechanicalImage from '../Images/mechanical.jpg'
import eceImage from '../Images/Ece.jpg'
import computerImage from '../Images/computer.jpg'

const PGCourses = () => {
  return (
    <div>
      <div className="PG">
        <h1>PG COURSES @ ANNA UNIVERSITY</h1>
      </div>
      <br />
      <div className="container">
        <div className="box11">
        <img src={mechanicalImage} alt="mechanical Engineering" />
          <br />
          <br />
          <h3>Mechanical Engineering</h3>
          <br/>
          <p>A Mechanical Engineer specializes in a wide range of engineering fields. Mechanical Engineering involves designing, developing, building, and testing.</p>
        </div>
        <div className="box21">
        <img src={eceImage} alt="ece Engineering" />
          <br />
          <br/>
          <h3>Electrical and Electronics Engineering</h3>
          <br/>
          <p>Electronics engineering deals with “light current” applications such as telephone and radio communication, computers, radar, and automatic control systems.</p>
        </div>
        <div className="box33">
        <img src={computerImage} alt="computerEngineering" />
        <br />
          <br/>
          <h3>Computer Engineering</h3>
          <br/>
          <p>Computer engineering usually deals with areas including writing software and firmware for embedded microcontrollers, designing VLSI chips, analog sensors, mixed signal circuit boards, and operating systems.</p>
        </div>
      </div>
    </div>
  );
};

export default PGCourses;
