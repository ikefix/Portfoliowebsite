import React from 'react'
import Cv from '../../assets/cv.pdf'
const Cta = () => {
  return (
    <div className="cta">
        <a href={Cv} download>Download Cv</a>
        <a href="#contact">Lets Talk</a>
    </div>
  )
}

export default Cta