import React from 'react';
import './portfolio.css';
import IMG1 from '../../assets/IMG1.png';
import FINALREPORT from '../../assets/FINALREPORT.pdf';
import IMG2 from '../../assets/IMG2.PNG';
import IMG3 from '../../assets/IMG3.png';
import IMG4 from '../../assets/IMG4.png';
import IMG5 from '../../assets/IMG5.png';
import IMG6 from '../../assets/IMG6.png';

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Face and Digit Classification',
    github: FINALREPORT,
    technologies: ['Python', 'Numpy', 'Neural Networks'],
  },
  {
    id: 2,
    image: IMG4,
    title: 'Streaming App',
    github: '', //Demo
    technologies: ['Java', 'SQLite', 'Android Studio' ],
  },
  {
    id: 3,
    image: IMG5,
    title: 'Auction Platform',
    github: 'https://github.com/Swoopi/PrinInfo',
    technologies: ['Java', 'Tomcat', 'MySQL Workbench', 'Eclipse' ],
  },
  {
    id: 4,
    image: IMG2,
    title: 'Customer Management App',
    github: 'https://github.com/Swoopi/CustomerApp',
    technologies: ['Python', 'Django', 'PostgreSQL'],
  },
  {
    id: 5,
    image: IMG3,
    title: 'Photos App',
    github: 'https://bitbucket.org/cs213group25/photos25/src/main/',
    technologies: ['JavaFX'],
  },
  {
    id: 6,
    image: IMG6,
    title: "Photos App on Android",
    github: 'https://bitbucket.org/cs213group25/photosandroid/src/main/',
    technologies: ['Java', 'Android Studio']
  }
];

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h2>My Projects</h2>
      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github, schoolProject, technologies}) => (
            <article key={id} className='portfolio__item'>
              <div className='portfolio__item-image'>
                <img src={image} alt={title}/>
                <h3>{title}</h3>
                <div className="portfolio__item-cta">
                  {github && <a href={github} className='btn'>Reference</a>}
                  {schoolProject && <span className='school-project-text'>School Project</span>}
                </div>
                <div className="portfolio__item-technologies">
                  <h4>Technologies:</h4>
                  <ul>
                    {technologies.map((tech, index) => (
                      <li key={index}>{tech}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          ))
        }
      </div>
    </section>
  )
}

export default Portfolio;
