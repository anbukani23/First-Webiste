import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../CSS/Header.css'
import Admission from '../Pages/Admission';
import BoxComponent from '../Pages/BoxComponent';
import UGCourses from '../Pages/UGCourses';
import PGCourses from '../Pages/PGCourses';
import Campus from '../Pages/Campus'
import Footer from './Footer';
import collegelogo from '../Images/collegelogo.png';
import Logo from '../Components/Logo';
import Newad from '../Pages/Newad'

const Header = () => {
  const [isMobile, setIsMobile] = useState(false);

  return (
    <nav className='navbar'>
      
      
       

      <ul className={isMobile ? 'nav-links-mob' : 'nav-links'}>
        <Link to="/" className='home'    activeClassName="active-link" onClick={() => setIsMobile(false)}>
          <li>Home</li>
        </Link>
        <Link to="/about" className='aboutus' onClick={() => setIsMobile(false)}>
          <li>About Us</li>
        </Link>
        <Link to="/courses" className='courses' onClick={() => setIsMobile(false)}>
          <li>Courses</li>
        </Link>
        <Link to="/placements" className='placements' onClick={() => setIsMobile(false)}>
          <li>Placements</li>
        </Link>
        <Link to="/contact" className='contact' onClick={() => setIsMobile(false)}>
          <li>Contact Us</li>
        </Link>
      </ul>

      <button className='mob-menu-icon' onClick={() => setIsMobile(!isMobile)}>
        {isMobile ? <h1>X</h1> : <h1>=</h1>}
      </button>
    </nav>
   

  );
}
<>
<Newad />
<Logo />
<Admission />

<BoxComponent />
<UGCourses />
<PGCourses />
<Campus />
<Footer />
</>

  
export default Header;








