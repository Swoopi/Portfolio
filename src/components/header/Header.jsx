import React from 'react';
import './header.css';
import ME from '../../assets/me.png';
import CTA from './CTA';
import HeaderSocial from './HeaderSocials';

const Header = () => {
  return (
    <header>
      <div className="container header__container" id="header">
        <div className="me">
          <img src={ME} alt="Dylan Farrell" />
          <div className="header__text">
            <h1 className="typing">Dylan Farrell</h1>
            <h5 className="subtitle">Software Developer</h5>
          </div>
          <CTA />
          <HeaderSocial />
        </div>
      </div>
    </header>
  );
};

export default Header;
