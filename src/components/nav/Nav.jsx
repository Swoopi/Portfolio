import React, { useState, useEffect } from 'react';
import './nav.css';
import { AiOutlineHome } from 'react-icons/ai';
import { BiBook } from 'react-icons/bi';

const Nav = () => {
  const [activeNav, setActiveNav] = useState('');

  const handleNavigation = (event, nav) => {
    event.preventDefault();
    setActiveNav(nav);
    if (nav === '') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const element = document.getElementById(nav);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const experienceSection = document.getElementById('experience');
      const headerSection = document.querySelector('header');

      if (experienceSection && headerSection) {
        const experienceTop = experienceSection.getBoundingClientRect().top;
        const headerBottom = headerSection.getBoundingClientRect().bottom;

        if (experienceTop <= window.innerHeight / 2 && experienceTop >= -experienceSection.offsetHeight / 2) {
          setActiveNav('experience');
        } else if (headerBottom >= 0) {
          setActiveNav('');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav>
      <a href="#header" onClick={(event) => handleNavigation(event, '')} className={activeNav === '' ? 'active' : ''}><AiOutlineHome /></a>
      <a href="#experience" onClick={(event) => handleNavigation(event, 'experience')} className={activeNav === 'experience' ? 'active' : ''}><BiBook /></a>
    </nav>
  );
};

export default Nav;
