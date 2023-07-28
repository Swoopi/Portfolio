import React from 'react'
import CV from '../../assets/DYLANFARRELLRESUME.pdf'

const CTA = () => {
  return (
    <div className='cta'>
        <a href={CV} download className='btn'> View Resume </a>
        
    </div>
    
  )
}

export default CTA