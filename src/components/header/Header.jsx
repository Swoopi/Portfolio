import React from 'react'
import './header.css'
import ME from '../../assets/me.png'
import CTA from './CTA'
import HeaderSocial from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        
        <div className="me">
        
          <img src={ME} alt="me"/>
          <div className="header__text">
          
          <h1 class="typing">Dylan Farrell</h1>
          </div>
          
          <h5 className="subtitle">
          Software Developer
        </h5>
        <CTA />
        <HeaderSocial />

        </div>
        
        
        <a href="#portfolio" className='scroll__down'>Scroll Down </a>  
      </div>
      
    </header>
  )
}

export default Header
