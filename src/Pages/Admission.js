import React, { useState, useEffect } from 'react';
import collegeImage from '../Images/college.png';
import graduationImage from '../Images/graduation.png';
import graduation1Image from '../Images/graduation1.png';
import graduation2Image from '../Images/graduation2.png';

const images = [
  collegeImage,
  graduationImage,
  graduation1Image,
  graduation2Image,
];

const Admission = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(intervalId); // Cleanup on unmount
  }, []);

  const containerStyle = {
    padding: '20px',
    backgroundColor: 'white',
    textAlign: 'center',
  };

  const imageStyle = {
    width: '100%',
    height: 'auto',
  };

  const welcomeStyle = {
    fontSize: '25px',
    marginBottom: '10px',
  };

  const paraStyle = {
    fontSize: 'large',
    lineHeight: '1.6',
    textAlign: 'justify',
  };

  return (
    <div style={containerStyle}>
      <h1 style={{ fontSize: '2rem' }}>Admissions 2024-25</h1>
      <br />
      <div style={{ margin: '0 auto' }}>
        <img src={images[currentImageIndex]} alt="College" style={imageStyle} />
      </div>
      <br />
      <div>
        <h1 style={welcomeStyle}>Welcome to Anna University.</h1>
        <br />
        <div style={paraStyle}>
          <p>
            Anna University was established on 4th September, 1978 as a unitary type of University. This University was named after Late Dr.C.N.Annadurai, former Chief Minister of Tamil Nadu. It offers higher education in Engineering, Technology, Architecture, and Applied Sciences relevant to the current and projected needs of the society. Besides promoting research and disseminating knowledge gained therefrom, it fosters cooperation between the academic and industrial communities.
          </p>
          <p>
            The University is situated in the southern part of the city of Chennai and it is 3 kms from the nearest Railway Station (Guindy) and 10 kms from Chennai Airport. The University's Main Campus extends over 189 acres abutting the Adyar River on the north and Raj Bhavan on the south. The Madras Institute of Technology at Chrompet constitutes the second campus of the University which extends over 52 acres. A third campus extending over 5 acres is located at Taramani, Chennai. These campuses have a variety of buildings serving the various needs of the University community.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Admission;

