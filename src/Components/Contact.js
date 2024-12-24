import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import '../CSS/Header.css'; // Make sure you have this CSS file

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value
    });
  };

  const validateForm = () => {
    const { name, email, phone, message } = formData;

    if (name === '' || email === '' || phone === '' || message === '') {
      alert('Please fill in all fields.');
      return false;
    }

    alert('Form submitted successfully!');
  };

  return (
    <div className="full">
      <div className="Contact-Form">
        <h1>Contact Us</h1>
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="input-fields">
            <input
              type="text"
              id="name"
              className="input"
              placeholder="Your Name *"
              value={formData.name}
              onChange={handleChange}
            />
            <input
              type="email"
              id="email"
              className="input"
              placeholder="Your Email *"
              value={formData.email}
              onChange={handleChange}
            />
            <input
              type="text"
              id="phone"
              className="input"
              placeholder="Your Phone *"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>
          <div className="msg">
            <textarea
              id="message"
              placeholder="Message *"
              value={formData.message}
              onChange={handleChange}
            ></textarea>
          </div>
          <div>
            <button type="button" onClick={validateForm}>Send message</button>
          </div>
          <br/>
          <br/>

          <div className="contact-info">
            <div className="address">
            <div className='icon'>
            <FontAwesomeIcon icon={faLocationDot} size="2x"  /></div>

              <h3>Address:</h3>
              <p>Sardar Patel Road, Anna University, Chennai - 600 025, Tamil Nadu</p>
            </div>
            <div className="email">
              <div className='icon1'>
              <FontAwesomeIcon icon={faEnvelope} size="2x" />
 
              </div>
              <h3>
              
              
                Admissions:     Anna univ.edu
                Administration: registrar@annauniv.edu<br />
                Examinations: acoeud@annauniv.edu<br />
                Student Affairs: dsa@annauniv.edu
               
               
              </h3>
            </div>
            <div className="phone">
              <div className='icon3'>
              <FontAwesomeIcon icon={faPhone} size="2x" />

              </div>
              <h3>
                Phone:<br />
                Admissions: 044 - 2235 8314<br />
                Examinations: 044 - 2235 7295 / 96 (CoE), 044 - 2235 7853 (ACoE)<br />
                Student Affairs: 044 - 2235 7080 / 81
              </h3>
            </div>
          </div>
        </form>
      </div>
     
    </div>
  );
};

export default Contact;
