import React from 'react';
import './header.css';
import ME from '../../assets/me.png';
import CTA from './CTA';
import HeaderSocial from './HeaderSocials';
import ToggleSwitch from '../toggleswitch/ToggleSwitch';

const Header = () => {

  return (
    <header>
      <div className="container header__container" id="header">
        <ToggleSwitch />  {/* Replace the default button with the custom toggle switch */}

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
