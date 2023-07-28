import React from 'react'
import './experience.css'
import {ImCheckmark} from 'react-icons/im'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>Skills</h5>
      <h2>My experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Programming Languages </h3>
          <div className="experience__content">
            <article className='experience__details'>
              <ImCheckmark className='experience_details-icon'/>
              <div>
                <h4>Python</h4>
                <small className='text-light'>Experienced</small>
              </div>

            </article>
            <article className='experience__details'>
              <ImCheckmark className='experience_details-icon'/>
              <div>
                <h4>Java</h4>
                <small className='text-light'>Intermediate</small>
              </div>

            </article>
            <article className='experience__details'>
              <ImCheckmark className='experience_details-icon'/>
              <div>
                <h4>C</h4>
                <small className='text-light'>Intermediate</small>
              </div>

            </article>
            <article className='experience__details'>
              <ImCheckmark className='experience_details-icon'/>
              <div>
                <h4>Node.js</h4>
                <small className='text-light'>Basic</small>
              </div>

            </article>

          </div>

        </div>


        <div className="experience__backend">
          <h3>Development Tools</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <ImCheckmark className='experience_details-icon'/>
              <div>
                <h4>Django</h4>
                <small className='text-light'>Intermediate</small>
              </div>
              
            </article>
            <article className='experience__details'>
              <ImCheckmark className='experience_details-icon'/>
              <div>
                <h4>React</h4>
                <small className='text-light'>Intermediate</small>
              </div>

            </article>
            <article className='experience__details'>
              <ImCheckmark className='experience_details-icon'/>
              <div>
                <h4>Git</h4>
                <small className='text-light'>Intermediate</small>
              </div>

            </article>
            <article className='experience__details'>
              <ImCheckmark className='experience_details-icon'/>
              <div>
                <h4>AWS</h4>
                <small className='text-light'>Basic</small>
              </div>

            </article>

          </div>
          
        </div>
        </div>
     
  
      </section>
  )
}

export default Experience