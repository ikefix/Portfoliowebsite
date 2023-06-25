import React from 'react';
import './nav.css';
import {AiFillHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BsBook} from 'react-icons/bs'
import {RiServiceLine} from 'react-icons/ri'
import {BiMessageDots} from 'react-icons/bi'

const Nav = () => {
  return (
    <nav>
        <a href="home"><AiFillHome/></a>
        <a href="about"><AiOutlineUser/></a>
        <a href="experience"><BsBook/></a>
        <a href="services"><RiServiceLine/></a>
        <a href="contact"><BiMessageDots/></a>
    </nav>
  )
}

export default Nav