import React from 'react';
import './header.css';
import Cta from './Cta'

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
      </div>
    </header>
  )
}

export default Header