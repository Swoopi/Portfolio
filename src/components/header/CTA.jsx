import React from 'react'
import CV from '../../assets/DYLANFARRELLRESUME.pdf'
import './cta.css'

const CTA = () => {
  return (
    <div className='cta'>
        <a href={CV} className='btn'> View Resume </a>
        
    </div>
    
  )
}

export default CTA