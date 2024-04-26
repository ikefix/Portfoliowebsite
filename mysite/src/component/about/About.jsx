import React from 'react';
import './about.css';
import Mei from '../../assets/mei.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolder} from 'react-icons/vsc'
import Cta from './Cta'

const About = () => {
  return (
    <section id="about">
      <h5>Get to know OMEKE PETER IKECHUKWU</h5>
      <h2> PORT FOLIO</h2>
      <h4 id='king'><Cta/> </h4>
      <div className="container about__container ">
        <div className="about__me">
          <div className="about__me-image">
            <img src={Mei} alt="about Me" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon"/>
              <h5>Experience</h5>
              <small>2+ years working Experience</small>
            </article>
            <article className="about__card">
              <FiUsers className="about__icon"/>
              <h5>Clients</h5>
              <small>20+ Happy Client</small>
            </article>
            <article className="about__card">
              <VscFolder className="about__icon"/>
              <h5>projects</h5>
              <small>20+ completed </small>
            </article>
          </div>
          <p>
            Hello; I'm peter Omeke, a passionate software developer with a knack for problem-solving and a lover 
            for building innovative solutions.<br/> I have 2+ years experinece in software development.<br/>My journey in software develoment began with a fascinating for technology and a desire to create solutions with codes. Over the years, I've honed my skills in Javascript, React, Node.js, CSS, Git & Github.
            I'm always eager to learn new technologies to stay ahead of the curve.<br/> I thrive in a collaborative environment where i can brainstorm ideas, collaborate with Team members.<br/><br/>If you are looking for a dedicated Software developer you can connect with me lets work together.
          </p>
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>

    </section>
  )
}

export default About