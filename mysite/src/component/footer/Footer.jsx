import React from 'react';
import {FaFacebookF} from 'react-icons/fa'
import {LuInstagram} from 'react-icons/lu'
import {FiTwitter} from 'react-icons/fi'
import './footer.css'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>EGATOR</a>

      <ul className='permalinks'></ul>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonias</a></li>
        <li><a href="#contacts">Contacts</a></li>

        <div className="footer__socials">
          <a href="https://facebook.com"><FaFacebookF/></a>
          <a href="https://instagram.com"><LuInstagram/></a>
          <a href="https://twitter.com"><FiTwitter/></a>
        </div>

        <div className="footer__copyright">
          <small>
            &copy; Omeke peter. All right Reserve
          </small>
        </div>
    </footer>
  )
}

export default Footer