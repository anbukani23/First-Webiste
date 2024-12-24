import React from 'react';
import '../CSS/Header.css'; // Import the CSS for the footer
import { FaPhone, FaInbox, FaAddressBook } from 'react-icons/fa';
import annauniversitylogo from '../Images/logo.png'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="frame1">
        <div className='logo1'>   
            
           <img src= {annauniversitylogo} alt="Anna University Logo" />
        </div>
        <div className='header'>
  <h2>Anna University, Chennai.</h2>
</div>
        
        <p>
          University was established in the year 2000 and it is one of the top best Engineering colleges in Tirunelveli, Southern Tamil Nadu, India.  </p>
      </div>
      <div className="frame2">
        
        <div className='quick'>
        <h2> Quick Links</h2>

        </div>
     
        <ul>
          <li><a href="#">About Us</a></li>
          <li><a href="#">Courses</a></li>
          <li><a href="#">Placement</a></li>
          <li><a href="#">Contact Details</a></li>
        </ul>
      </div>
      <div className="frame3">
        <div className='contactus'>
        <h2>Contact Us</h2>

        </div>
        
        <div className="contact-info">
          <FaPhone className="icon" /> 
          <p style={{color: 'white'}}>+91 462 2502283</p>
          <br />
          <FaInbox className="icon" /> <p style={{ color:'white'}}>principal@francisxavier.ac.in</p>
          <br />
          <FaAddressBook className="icon" /> <p style={{ color: 'white' }}>principal@francisxavier.ac.in</p>

        </div>
      </div>
    </footer>
  );
};

export default Footer;