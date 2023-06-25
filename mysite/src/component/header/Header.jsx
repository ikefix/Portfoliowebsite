import React from 'react';
import './header.css';
import Cta from './Cta'
import Me from '../../assets/me.png'
import HeaderSocials from './HeaderSocials';

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I am </h5>
        <h1>OMEKE PETER IKECHUKWU </h1>
        <h5 className="text-light">
          Frontend Software Developer
        </h5>
        <Cta/>
        <HeaderSocials/>
        <div className="me">
          <img src={Me} alt="Me" />
        </div>
        <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header