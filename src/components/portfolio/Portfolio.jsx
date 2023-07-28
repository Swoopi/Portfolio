import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/IMG1.PNG' // replace with correct file path
import IMG2 from '../../assets/IMG2.PNG' // replace with correct file path
//import IMG3 from '../../assets/IMG3.jpg' // replace with correct file path

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
    image: IMG2,
    title: 'Personal Budgeting app',
    github: 'https://github.com',
    
  }
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github}) => (
            <article key={id} className='portfolio__item'>
              <div className='portfolio__irem-image'>
                <img src={image} alt={title}/>
                <h3>
                  {title}
                </h3>
                <div className="portfolio__item-cta">
                  <a href={github} className='btn'>Github</a>
                  
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
