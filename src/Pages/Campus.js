import React from 'react';
import amazonImg from '../Images/amazon.jpg';
import bluecartImg from '../Images/bluecart.jpg';
import iciciImg from '../Images/icici.jpg';
import infosysImg from '../Images/infosys.jpg';
import relianceImg from '../Images/reliance.jpg';
import '../CSS/Header.css'; 

const Campus = () => {
  return (
    <div id="campus-placements" className="campus">
      <h1>Campus Placements</h1>
      <br/>
      <div className="placemark">
        <div className="scrolling-container">
          <img src={amazonImg} alt="Amazon" className="placement-image" />
          <img src={bluecartImg} alt="Bluecart" className="placement-image" />
          <img src={iciciImg} alt="ICICI" className="placement-image" />
          <img src={infosysImg} alt="Infosys" className="placement-image" />
          <img src={relianceImg} alt="Reliance" className="placement-image" />
        </div>
      </div>
    </div>
  );
};

export default Campus;

