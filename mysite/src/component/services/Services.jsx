import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const services = () => {
  return (
    <section id='services'>
      <h5>Work History </h5>
      <h2>My RECENT WORK HISTORY</h2>
      <div className="container container__services">
        <article className="service">
          <div className="service__head">
            <h2>MyTeacher Services</h2>
            <h3>BackEnd Developer </h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Developed and maintained web apps using Python, Django, and related Technologie </p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Developed RESTful web services and APIs</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Optimized applications for performance and scalability</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>integrate third-party services and APIs</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Worked closely with project managers to prioritize tasks to meet project deadlines</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Writing technical documentation</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p> Implemented and maintained a version control system (Git) to track changes and 
                  facilitate collaboration within the development team.
             </p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Writing technical documentation</p>
            </li>
          </ul>
        </article>
        {/*end of UIUX Design*/}

        <article className="service">
          <div className="service__head">
            <h2>Ikefix Digital</h2>
            <h3>FrontEnd Developer </h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p> Developed custom WordPress themes from scratch, adhering to best practices and web standards. </p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Implemented on-page SEO techniques, including optimizing Meta tags, headers, and content for target keywords. </p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Assisting in troubleshooting front-end bugs for effective and efficient application running. </p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Writing of high-quality, scalable, and reusable code</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Developing and maintaining dynamic and data-driven web applications using React, JavaScript, HTML, CSS, and Tailwind CSS.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Developing and maintaining dynamic and data-driven web applications using React, JavaScript, HTML, CSS, and Tailwind CSS.</p>
            </li>
          </ul>
        </article>
        {/*end of webdesign*/}

        <article className="service">
          <div className="service__head">
            <h3>Content Creation</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            </li>
          </ul>
        </article>
        {/*end of content creation*/}
      </div>
    </section>
  )
}

export default services