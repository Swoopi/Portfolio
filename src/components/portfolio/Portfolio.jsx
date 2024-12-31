import React from 'react';
import './portfolio.css';
import IMG1 from '../../assets/IMG1.PNG';
import IMG2 from '../../assets/IMG2.PNG';
import IMG3 from '../../assets/IMG3.png';
import IMG4 from '../../assets/IMG4.png';
import IMG5 from '../../assets/IMG5.png';
import IMG6 from '../../assets/IMG6.svg';
import IMG7 from '../../assets/IMG7.png'; // Import the image for ClipStation

const data = [

  {
    id: 2,
    image: IMG7, // Change this to the image for ClipStation
    title: 'ClipStation.io',
    github: 'https://clipstation.io', 
    technologies: ['Typescript', 'Firebase', 'Cloudinary'], // Update with relevant technologies
  },
  {
    id: 3,
    image: IMG6,
    title: 'Munch Mates',
    github: 'https://munchmates.fyi/',
    technologies: ['Dart', 'Flutter', 'Firebase', 'iOS development'],
  },
  {
    id: 4,
    image: IMG1,
    title: 'Face and Digit Classification',
    technologies: ['Python', 'Numpy', 'Neural Networks'],
  },
  {
    id: 5,
    image: IMG4,
    title: 'Streaming App',
    technologies: ['Java', 'SQLite', 'Android Studio' ],
  },
  {
    id: 6,
    image: IMG5,
    title: 'Auction Platform',
    github: 'https://github.com/Swoopi/PrinInfo',
    technologies: ['Java', 'Tomcat', 'MySQL Workbench', 'Eclipse' ],
  },
  {
    id: 7,
    image: IMG2,
    title: 'Customer Management App',
    github: 'https://github.com/Swoopi/CustomerApp',
    technologies: ['Python', 'Django', 'PostgreSQL'],
  },
  {
    id: 8,
    image: IMG3,
    title: 'Photos App',
    github: 'https://bitbucket.org/cs213group25/photos25/src/main/',
    technologies: ['JavaFX', 'Java', 'Android Studio', 'Tomcat'],
  },
];

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h2 className="portfolio__title">My Projects</h2>
      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github, technologies}) => (
            <article key={id} className='portfolio__item'>
              <div className='portfolio__item-image'>
                <img src={image} alt='Project Thumbnail' className="portfolio__image"/>
              </div>
              <h3 className="portfolio__item-title">{title}</h3>
              <div className="portfolio__item-cta">
                {github && <a href={github} className='btn'>Reference</a>}
              </div>
              <div className="portfolio__item-technologies">
                <h4 className="portfolio__technologies-title">Technologies:</h4>
                <ul>
                  {technologies.map((tech, index) => (
                    <li key={index} className="portfolio__technology-item">{tech}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))
        }
      </div>
    </section>
  )
}

export default Portfolio;
