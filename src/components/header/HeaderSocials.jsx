import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'



const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/dylan-farrell-71a21a1ba/" target="_blank" rel="noreferrer"><BsLinkedin size={32}/></a>
        <a href="https://github.com/swoopi" target="_blank" rel="noreferrer"><FaGithub size={32}/></a>
        

        
    </div>
  )
}

export default HeaderSocials