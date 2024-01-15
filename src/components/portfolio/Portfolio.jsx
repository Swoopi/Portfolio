import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/IMG1.PNG' // replace with correct file path
import IMG2 from '../../assets/IMG2.PNG' // replace with correct file path
import IMG3 from '../../assets/IMG3.png' // replace with correct file path

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Chess AI Engine',
    github: 'https://github.com/Swoopi/Chess',
    
  },
  {
    id: 2,
    image: IMG2,
    title: 'Customer Management System',
    github: 'https://github.com/Swoopi/CustomerApp',
    
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
                  {github && <a href={github} className='btn'>Github</a>}
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
