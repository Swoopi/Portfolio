import React from 'react';
import './footer.css';

const skills = [
  'Java',
  'Python',
  'React',
  'Django',
  'C',
  'SQL',
  'MongoDB',
  'HTML/CSS',
  'Git',

];

const Footer = () => {
  return (
    <footer className="footer" id="skills">
      <h2 className="footer__title">Technologies</h2>
      <p className="footer__subtitle">Coding languages and technologies I am proficient with.</p>
      <div className="footer__skills">
        {skills.map((skill, index) => (
          <div key={index} className="footer__skill">
            <span className="footer__skill-name">{skill}</span>
          </div>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
