import React from 'react'
import {FaLinkedin} from 'react-icons/fa'
import {AiFillGithub} from 'react-icons/ai'
import {AiFillDribbbleCircle} from 'react-icons/ai'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="linkedin.com" target='blank'><FaLinkedin/></a>
        <a href="github.com" target='blank'><AiFillGithub/></a>
        <a href="dribble.com" target='blank'><AiFillDribbbleCircle/></a>

    </div>
  )
}

export default HeaderSocials