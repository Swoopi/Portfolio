import React from 'react';
import './nav.css';
import {AiOutlineHome} from 'react-icons/ai';
import {BiBook} from 'react-icons/bi';
import { useState } from 'react';

const Nav = () => {
  const[activeNav, setActiveNav] = useState('');

  const handleNavigation = (event, nav) => {
    event.preventDefault();
    setActiveNav(nav);
    window.location.hash = nav;
  }

  return (
    <nav>
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      <a href="#" onClick={(event) => handleNavigation(event, '')} className={activeNav === '' ? 'active': ''}><AiOutlineHome/></a>
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      <a href="#experience" onClick={(event) => handleNavigation(event, 'experience')} className={activeNav === 'experience' ? 'active' : ''}><BiBook/></a>
    </nav>
  );
}

export default Nav;
