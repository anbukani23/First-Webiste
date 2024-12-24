import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookOpen, faUser, faPlaceOfWorship } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';
import Academic from '../Images/academic.png';
import Faculty from '../Images/faculty.png'
import Placement from '../Images/placement.png'
const BoxComponent = () => {
  return (
    <div className="box">
      <motion.div
        className="academics"
        initial={{ opacity: 0, y: 50 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.9 }}
      >
        <FontAwesomeIcon icon={faBookOpen} style={{ fontSize: '30px' }} />
        <br />
        <br />
        <h1 style={{
          
        backgroundImage: `url(${Academic})`,// Corrected the path
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          height: '240px', 
          lineHeight: '50px',
          textAlign: 'center',
        }}>
          Academics
        </h1>
        <br />
        <p>
          Students at Anna University are provided with a holistic approach to education and are encouraged to develop both their academic and personal skills.
        </p>
      </motion.div>

      <motion.div
        className="faculty"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }} 
      >
        <FontAwesomeIcon icon={faUser} style={{ fontSize: '30px' }} />
        <br />
        <br />
        <h1 style={{
          color: 'black',
          backgroundImage: `url(${Faculty})`, // Corrected the path
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          height: '250px',
          lineHeight: '50px',
          textAlign: 'center',
        }}>
          Faculty
        </h1>
        <br />
        <p>
          Our faculty members are highly qualified and dedicated to support our mission in transforming education.
        </p>
      </motion.div>

      <motion.div
        className="placement"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <FontAwesomeIcon icon={faPlaceOfWorship} style={{ fontSize: '25px' }} />
        <br />
        <br />
        <br />
        <h1 style={{
          color: 'black',
          backgroundImage: `url(${Placement})`, // Corrected the path
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          height: '250px',
          lineHeight: '50px',
          textAlign: 'center',
        }}>
          Placement
        </h1>
        <br />
        <p>
          Anna University has an excellent placement record. The SRCE Training & Placement Cell assists with Placements and Internships.
        </p>
      </motion.div>
    </div>
  );
};

export default BoxComponent;
