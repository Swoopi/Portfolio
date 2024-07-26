import React, { useEffect, useState } from 'react';
import './footer.css';
import JAVAICON from '../../assets/tech_icons/java-icon.jpg';
import PYTHONICON from '../../assets/tech_icons/python-icon.jpg';
import DJANGOICON from '../../assets/tech_icons/django-icon.jpg';
import HTMLICON from '../../assets/tech_icons/html-icon.jpg';
import CSSICON from '../../assets/tech_icons/css-icon.jpg';
import REACTICON from '../../assets/tech_icons/react-icon.jpg';
import C_ICON from '../../assets/tech_icons/C-icon.jpg';
import ANDROIDICON from '../../assets/tech_icons/android-icon.jpg';
import NODEICON from '../../assets/tech_icons/node-icon.jpg';

const icons = [
  JAVAICON, PYTHONICON, DJANGOICON, HTMLICON, CSSICON,
  REACTICON, C_ICON, ANDROIDICON, NODEICON
];

const Footer = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const preloadImages = async () => {
      const promises = icons.map(src => {
        return new Promise((resolve, reject) => {
          const img = new Image();
          img.src = src;
          img.onload = resolve;
          img.onerror = reject;
        });
      });
      await Promise.all(promises);
      setLoaded(true);
    };

    preloadImages();
  }, []);

  if (!loaded) {
    return <div>Loading...</div>; // Or any loading spinner
  }

  return (
    <footer className="footer" id="experience">
      <h2 className="footer__title">Tech Stack</h2>
      <div className="footer__icons">
        <div className="footer__icons-container">
          {Array(10).fill(icons).flat().map((icon, index) => (
            <img key={index} src={icon} alt={`Icon ${index}`} className="footer__icon" />
          ))}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
