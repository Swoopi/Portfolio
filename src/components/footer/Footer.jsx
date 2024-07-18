import React from 'react';
import './footer.css'; 
import JAVAICON from '../../assets/tech_icons/java-icon.jpg';
import PYTHONICON from '../../assets/tech_icons/python-icon.jpg';
import DJANGOICON from '../../assets/tech_icons/django-icon.jpg';
import HTMLICON from '../../assets/tech_icons/html-icon.jpg';
import CSSICON from '../../assets/tech_icons/css-icon.jpg';
import REACTICON from '../../assets/tech_icons/react-icon.jpg';
import C_ICON from '../../assets/tech_icons/C-icon.jpg';
import ANDROIDICON from '../../assets/tech_icons/android-icon.jpg'
import NODEICON from '../../assets/tech_icons/node-icon.jpg'



const Footer = () => {
  return (
    <footer className="footer" id="experience">
      <h2 className="footer__title">Tech Stack</h2>
      <div className="footer__icons">
        <div className="footer__icons-container">
          <img src={JAVAICON} alt="Icon 1" className="footer__icon" />
          <img src={PYTHONICON} alt="Icon 2" className="footer__icon" />
          <img src={DJANGOICON} alt="Icon 3" className="footer__icon" /> 
          <img src={HTMLICON} alt="Icon 4" className="footer__icon" />
          <img src={CSSICON} alt="Icon 5" className="footer__icon" />
          <img src={REACTICON} alt="Icon 6" className="footer__icon" /> 
          <img src={C_ICON} alt="Icon 7" className="footer__icon" /> 
          <img src={ANDROIDICON} alt="Icon 8" className="footer__icon" /> 
          <img src={NODEICON} alt="Icon 9" className="footer__icon" /> 
          <img src={JAVAICON} alt="Icon 1" className="footer__icon" />
          <img src={PYTHONICON} alt="Icon 2" className="footer__icon" />
          <img src={DJANGOICON} alt="Icon 3" className="footer__icon" /> 
          <img src={HTMLICON} alt="Icon 4" className="footer__icon" />
          <img src={CSSICON} alt="Icon 5" className="footer__icon" />
          <img src={REACTICON} alt="Icon 6" className="footer__icon" /> 
          <img src={C_ICON} alt="Icon 7" className="footer__icon" /> 
          <img src={ANDROIDICON} alt="Icon 8" className="footer__icon" /> 
          <img src={NODEICON} alt="Icon 9" className="footer__icon" /> 
           

          {/* Add more icons as needed */}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
