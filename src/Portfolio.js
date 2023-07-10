import React from 'react';
import './Portfolio.css'; 
import image from './My_project.png';
import { FaLinkedin } from 'react-icons/fa';  // Import LinkedIn icon

const Portfolio = () => {
    const handleClick = () => {
        // This will open your LinkedIn profile in a new tab
        window.open('https://www.linkedin.com/in/dylan-farrell-71a21a1ba/', '_blank');
    };

    return (
        <body>
            <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Raleway:400,400i,700"></link>
            <div className="portfolio-container">
                <img className="portfolio-image" src={image} alt="name"/>
                <h1 className="portfolio-name"> Dylan Farrell</h1>
                <h2 className="portfolio-subtitle">Software Engineer</h2>
                <a href="/resume" className="portfolio-button" target="_blank" rel="noopener noreferrer">
                    View My Resume!
                </a>
                <FaLinkedin size={40} onClick={handleClick} style={{ marginTop: '20px', cursor: 'pointer' }}/>  {/* LinkedIn icon */}
            </div>
        </body>
    );
};

export default Portfolio;
