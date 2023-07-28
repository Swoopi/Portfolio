import React from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {GrProjects} from 'react-icons/gr'
import {BiBook} from 'react-icons/bi'
import {useState} from 'react'

const Nav = () => {
  const[activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active': ''}><AiOutlineHome/></a>
      <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><BiBook/></a>

   
    </nav>
  )
}

export default Nav