import React from 'react';
import './experience.css';
import {BsPatchCheckFill} from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='experience'>Experience
    <h5>Skill+Education</h5>
    <h2>My Skills and Educational Background</h2>
    <div className="container experience__container">

      {/*frontend begines*/}
      <div className="experience__frontend">
        <h3>Tech-Skill + Soft-skill</h3>
        <div className="experience__content">
          <article className='experience__details'>
          <BsPatchCheckFill className='experience__details-icon'/>
          <div>
          <h4>FrontEnd Development</h4>
          <small className='text-light'>HTML, CSS, JavaScript, React</small>
          </div>
          </article>
          <article className='experience__details'>
          <BsPatchCheckFill className='experience__details-icon'/>
          <div>
          <h4>BackEnd Web Development</h4>
          <small className='text-light'>Node.js, Express.Js, MongoDb, Firebase</small>
          </div>
          </article>
          <article className='experience__details'>
          <BsPatchCheckFill className='experience__details-icon'/>
          <div>
          <h4>Programming Language</h4>
          <small className='text-light'>JavaScript, Python, PHP</small>
          </div>
          </article>
          <article className='experience__details'>
          <  BsPatchCheckFill className='experience__details-icon'/>
          <div>
          <h4>CMS(Wordpress)</h4>
          <small className='text-light'>SEO, Elementor</small>
          </div>
          </article>
          <article className='experience__details'>
          <BsPatchCheckFill className='experience__details-icon'/>
          <div>
          <h4>Technical Writing</h4>
          <small className='text-light'>Javascript, React etc.</small>
          </div>
          </article>
          <article className='experience__details'>
          <BsPatchCheckFill className='experience__details-icon'/>
          <div>
          <h4>Soft skill</h4>
          <small className='text-light'>Good Communication skill, Team player, Leadership skill</small>
          </div>
          </article>
        </div>
      </div>
      {/*end of frontend*/}

      {/*backend starts*/}

      <div className="experience__backend">
      <h3>Education and Certification</h3>
        <div className="experience__content"> 
          <article className='experience__details'>
          <BsPatchCheckFill className='experience__details-icon'/>
          <div>
          <h4>Bsc. PHYSICS</h4>
          <small className='text-light'>University of Port Harcourt</small>
          </div>
          </article>
          <article className='experience__details'>
          <BsPatchCheckFill className='experience__details-icon'/>
          <div>
          <h4>West Africa Examination Council (WAEC) </h4>
          <small className='text-light'>High School</small>
          </div>
          </article>
          <article className='experience__details'>
          <BsPatchCheckFill className='experience__details-icon'/>
          <div>
          <h4>PHYTHON</h4>
          <small className='text-light'>Intermdediate</small>
          </div>
          </article>
          <article className='experience__details'>
          <BsPatchCheckFill className='experience__details-icon'/>
          <div>
          <h4>DJANGO</h4>
          <small className='text-light'>Intermediate</small>
          </div>
          </article>
          <article className='experience__details'>
          <BsPatchCheckFill className='experience__details-icon'/>
          <div>
          <h4>MySQL</h4>
          <small className='text-light'>Intermediate</small>
          </div>
          </article>
          <article className='experience__details'>
          <BsPatchCheckFill className='experience__details-icon'/>
          <div>
          <h4>PHP</h4>
          <small className='text-light'>Beginner</small>
          </div>
          </article>
        </div>

      </div>
    </div>
    </section>
  )
}

export default Experience