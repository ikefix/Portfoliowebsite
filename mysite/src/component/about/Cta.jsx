import React from 'react'
import cv from '../../assets/cv.pdf'

const Cta = () => {
  return (
    <div className='cta'>
        <a href={cv} download >Download CV</a>
    </div>
  )
}

export default Cta