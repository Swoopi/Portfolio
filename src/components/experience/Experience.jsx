import React from 'react';
import './experience.css';
import { ImCheckmark } from 'react-icons/im';

const Experience = () => {
  return (
    <section id='experience'>
      <h5>Skills</h5>
      <h2>My experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Programming Languages </h3>
          <div className="experience__content">
            <ImCheckmark className='experience_details-icon' />
            <ImCheckmark className='experience_details-icon' />
            <ImCheckmark className='experience_details-icon' />
            <ImCheckmark className='experience_details-icon' />
            {/* Add more icons for other languages similarly */}
          </div>
        </div>

        <div className="experience__backend">
          <h3>Development Tools</h3>
          <div className="experience__content">
            <ImCheckmark className='experience_details-icon' />
            <ImCheckmark className='experience_details-icon' />
            <ImCheckmark className='experience_details-icon' />
            <ImCheckmark className='experience_details-icon' />
            {/* Add more icons for other tools similarly */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
