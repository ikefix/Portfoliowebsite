import React from 'react';
import './contact.css';
import {MdOutlineEmail} from 'react-icons/md'
import {CiLinkedin} from 'react-icons/ci'
import {AiOutlineWhatsApp} from 'react-icons/ai'
import { useRef } from 'react';
import emailjs from '@emailjs/browser'

const Contact = () => {
const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_c85do5r', 'template_q5ri4dt', form.current, 'dlSsIMBTszxK7_JCC')

    e.target.reset()
  };

  return (
    <section id='contact'>
    <h5>Get in touch</h5>
    <h2>Contact Me</h2>
    <div className="container contact__container">
      <div className="contact__options">
        <article className="contact__option">
          <MdOutlineEmail className='contact__option-icon'/>
          <h4>Email</h4>
          <h5>omekeikechukwu877@gmail.com</h5>
          <a href="https://omekeikechukwu877@gmail.com" target="blank">Send a Message</a>
        </article>
        <article className="contact__option">
          <CiLinkedin className='contact__option-icon'/>
          <h4>Linkdln</h4>
          <h5>Omeke Peter</h5>
          <a href="https://linkedin.com/in/omekeikechukwu" target="blank">Send a Message</a>
        </article>
        <article className="contact__option">
          <AiOutlineWhatsApp className='contact__option-icon'/>
          <h4>Whatsap</h4>
          <h5>+2347060837121</h5>
          <a href="https://api.whatsapp.com/send?+2347060837121" target='blank'>Send a Message</a>
        </article>
      
      </div>
      <form ref={form} onSubmit={sendEmail}>
        <input type='text' name='name' placeholder='Enter Your Fullname' required></input>
        <input type="email" name='email' placeholder='Enter Mail'required />
        <textarea name="message" rows="7" placeholder='Your message' required></textarea>
        <button type='submit' className='btn btn-primary'>send message</button>
      </form>
    </div>
    </section>
  )
}

export default Contact