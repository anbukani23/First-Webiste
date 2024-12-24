import React from 'react';
import '../CSS/Header.css'; // Import the external CSS file

const Marquee = () => {
  const marqueeStyle = {
    overflow: 'hidden', // Hide overflow
    whiteSpace: 'nowrap', // Prevent text wrapping
    width: '100%', // Full width
    boxSizing: 'border-box',
    cursor: 'pointer', // Change cursor to pointer
    left:'20%'
  };

  const textStyle = {
    display: 'inline-block',
    animation: 'scroll 25s linear infinite', // Control speed and repeat
  };

  return (
    <div style={marqueeStyle}>     
      <p style={textStyle} className="marquee-text">
        <span>⭐️ Application for PH.D Candidates ⭐️ </span>
        || ***Anna University Ranked in "State Public University Category" in NIRF 2024. QS University Ranking 2025 - 383<sup>rd</sup> in the world and 10<sup>th</sup> among 46 Indian Ranking.*** 
        | Certificate Courses on Yoga for Excellence.| Improving Strength and Experience in all category*** ||
      </p>
      <style>
        {`
          @keyframes scroll {
            0% {
              transform: translateX(100%); /* Start from right */
            }
            100% {
              transform: translateX(-100%); /* End at left */
            }
          }
        `}
      </style>
    </div>
  );
}

export default Marquee;


