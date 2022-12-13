import React from 'react'
import './header.css'
import {FaLinkedinIn, FaFacebookF} from 'react-icons/fa'
import {AiOutlineMail, AiOutlineInstagram} from 'react-icons/ai'
import {DiGithubAlt} from 'react-icons/di'
import header from '../../assets/header.png'

function home() {
  return (
    <div className='portfolio__header section__padding' id='home'>
        <div className='portfolio__header-content'>
            <h1>
               Hi, I am <span> Kashif Usman </span> 
            </h1>
            <h1>
            A web Developer
            </h1>
            <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur est illum accusantium aperiam in, rerum molestis.
            </p>
            <button type='button'> Hire Me</button>
            <div className='portfolio__header-sociallinks'>
                <span><FaLinkedinIn/></span>
                <span><AiOutlineMail/></span>
                <span><FaFacebookF/></span>
                <span><AiOutlineInstagram/></span>
                <span><DiGithubAlt/></span>
            </div>
        </div>
        <div className='portfolio__header-image'>
            <img src={header} alt='header'/>
        </div>
    </div>
  )
}

export default home