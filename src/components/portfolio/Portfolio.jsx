import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/IMG1.png' 
import FINALREPORT from '../../assets/FINALREPORT.pdf' 
import IMG2 from '../../assets/IMG2.PNG' 
import IMG3 from '../../assets/IMG3.png' 

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Face and Digit Classification',
    github: FINALREPORT,
    
  },
  {
    id: 2,
    image: IMG2,
    title: 'Online Auction Platform',
    github: 'https://github.com/Swoopi/PrinInfo',
    
  },
  {
    id: 3,
    image: IMG3,
    title: 'Photo Application',
    schoolProject: true,

    
  }
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      {/* ... */}
      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github, schoolProject}) => (
            <article key={id} className='portfolio__item'>
              <div className='portfolio__item-image'>
                <img src={image} alt={title}/>
                <h3>{title}</h3>
                <div className="portfolio__item-cta">
                  {github && <a href={github} className='btn'>Reference</a>}
                  {schoolProject && <span className='school-project-text'>School Project</span>}
                </div>
              </div>
            </article>
          ))
        }
      </div>
    </section>
  )
}

export default Portfolio
