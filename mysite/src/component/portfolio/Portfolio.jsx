import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'

//
const data = [
  {
    id: 1,
    image: IMG1,
    title: "Getting started with Reactjs",
    github: 'https://github.com',
    demo: 'https://dribbble.com/shots/21988476-Laber-AI-Neurotech-Branding'

  },
  {
    id: 2,
    image: IMG2,
    title: "Getting started with Reactjs",
    github: 'https://github.com',
    demo: 'https://dribbble.com/shots/21988476-Laber-AI-Neurotech-Branding'

  },
  {
    id: 3,
    image: IMG3,
    title: "Getting started with Reactjs",
    github: 'https://github.com',
    demo: 'https://dribbble.com/shots/21988476-Laber-AI-Neurotech-Branding'

  },
  {
    id: 4,
    image: IMG4,
    title: "Getting started with Reactjs",
    github: 'https://github.com',
    demo: 'https://dribbble.com/shots/21988476-Laber-AI-Neurotech-Branding'

  },
  {
    id: 5,
    image: IMG5,
    title: "Getting started with Reactjs",
    github: 'https://github.com',
    demo: 'https://dribbble.com/shots/21988476-Laber-AI-Neurotech-Branding'

  },
  {
    id: 6,
    image: IMG6,
    title: "Getting started with Reactjs",
    github: 'https://github.com',
    demo: 'https://dribbble.com/shots/21988476-Laber-AI-Neurotech-Branding'

  }
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent works</h5>
      <h2>portfolio</h2>
      <div className='container container__portfolio'>
        {
          data.map(({id, image, title, github, demo}) => {
            return(
              <article className='portfolio-item'>
              <div className="portfolio__item-image">
                <img src={image} alt="title" />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className='btn' target='blank'>Github</a>
                <a href={demo} className='btn' target='blank'>Demo</a>
              </div>
            </article>
            )
 
          })
        }
        
      </div>
    </section>
  )
}

export default Portfolio