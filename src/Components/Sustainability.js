import React from 'react';
import '../CSS/Header.css'; // Import your CSS file
import sustainabilityImage from '../Images/campus-sustainability.jpg';
import certificateImage from '../Images/Sustainability-certifications-stacs.png';
import HESIImage from '../Images/HESI.png';
import bluecartImage from '../Images/bluecart.jpg';


const Sustainability = () => {
    return (
        <div>
            <div className="image">
                <br></br>
            <img src={sustainabilityImage} alt="sustainability Image" />
                <div className="overlay">
                    <h1>Sustainability and Sustainable Development Goals</h1>
                    <br></br>
                    <p>Anna University's journey towards Sustainability and Sustainable Development Goals</p>
                </div>
            </div>
            <br></br>

            <div className="container">
                <div className="box1">
                    <h2>Sustainable Development Goals</h2>
                    <br>
                    </br>
                    <p>The Sustainable Development Goals (SDGs), also known as the Global Goals, were adopted by the United Nations in 2015. They are a set of objectives that call for every nation and the global community to work together to end poverty, protect the planet, and ensure that by 2030, everyone will have the opportunity for peace and prosperity.

                        The 17 SDGs are not separate goals but a unified framework. They are interconnected, meaning that actions taken in one area will impact outcomes in others. This highlights the necessity for development to balance social, economic, and environmental sustainability.

                        Countries have pledged to prioritize progress for those who face the most significant challenges. The SDGs aim to eradicate poverty, hunger, AIDS, and discrimination against women and girls.
                    </p>
                </div>
                <div className="box2">
                <img src={certificateImage} alt="sustainability Image" />
                </div>
            </div>

            {/* <div className="tect1">Agenda 2028</div>
            <div className="tect2">Net Zero Commitment</div>
            <div className="tect3">Campus Health and Well-Being</div>
            <div className="tect4">Awards and Recognitions</div>
            <div className="tect5">Policies</div>
            <div className="tect6">Research</div>
            <div className="tect7">Impact in Governance</div>
            <div className="tect8">Education</div>
            <div className="tect9">Engaging with the Community</div> */}

            <div className="our">
                <br></br>
                <h1>Our Recognitions</h1>
                <br/>
                <br/>
                <img src={HESIImage} alt="HESIImage" />
                <img src={bluecartImage} alt="raceImage" />
                </div>
                <br></br>
                <br></br>
        </div>
    );
};

export default Sustainability;
