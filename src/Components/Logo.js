import React from 'react';
import '../CSS/Header.css';
import collegelogo from '../Images/collegelogo.png';
import { Link } from 'react-router-dom';

const Logo = () => {
  return (
   
    <div className="logo">
      <div className="logoimage">
      <img src={collegelogo} alt="College Logo" />
      </div>
      <div className="head">
        <h1>Anna University</h1>
        <h3>Re-accredited with 'A' grade (CGPA 3.3 out of 4.0) by NAAC (3rd circle)</h3>
        <h3>Chennai-6000019, Tamil Nadu, India</h3>
      </div>
      <div className="button">
        <button>Alumni/Corporate</button>
        <Link to="/Sustainability">
                <button>Sustainability</button>
            </Link>      </div>
    </div>
  );
};

export default Logo;

