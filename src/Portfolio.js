import React from 'react';
import './Portfolio.css'; 
import image from './My_project.png';
import { FaLinkedin, FaGithub } from 'react-icons/fa';  // Import LinkedIn and GitHub icons

const Portfolio = () => {
    const handleLinkedInClick = () => {
        window.open('https://www.linkedin.com/in/dylan-farrell-71a21a1ba/', '_blank');
    };

    const handleGitHubClick = () => {
        window.open('https://github.com/swoopi', '_blank');
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
                <div style={{ display: 'flex', marginTop: '10px' }}>
                <FaLinkedin size={40} onClick={handleLinkedInClick} style={{ marginTop: '20px', cursor: 'pointer' }}/>  {/* LinkedIn icon */}
                <FaGithub size={40} onClick={handleGitHubClick} style={{ marginTop: '20px', marginLeft: '20px', cursor: 'pointer' }}/>  {/* GitHub icon */}
            </div>
            </div>
        </body>
    );
};

export default Portfolio;
