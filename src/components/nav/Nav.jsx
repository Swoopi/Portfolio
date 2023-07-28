import React from 'react';
import './nav.css';
import {AiOutlineHome} from 'react-icons/ai';
import {BiBook} from 'react-icons/bi';
import { useState } from 'react';

const Nav = () => {
  const[activeNav, setActiveNav] = useState('');

  const handleNavigation = (nav) => {
    setActiveNav(nav);
    window.location.hash = nav;
  }

  return (
    <nav>
      <a onClick={() => handleNavigation('')} className={activeNav === '' ? 'active': ''}><AiOutlineHome/></a>
      <a onClick={() => handleNavigation('experience')} className={activeNav === 'experience' ? 'active' : ''}><BiBook/></a>
    </nav>
  );
}

export default Nav;
