import React, {useEffect, useRef} from 'react'
import './header.css'
import {FaLinkedinIn, FaFacebookF} from 'react-icons/fa'
import {AiOutlineMail, AiOutlineInstagram} from 'react-icons/ai'
import {DiGithubAlt} from 'react-icons/di'
import header from '../../assets/header.png'
import { init } from "ityped";

function Home() {
  const textRef = useRef();
  useEffect(()=>{
    init(textRef.current, { showCursor: false, strings: ['A Web Developer', 'A Web Scrapper', 'A Graphic Designer', 'A Friend' ] })
 }, [])

  return (
    <div className='portfolio__header section__padding' id='home'>
        <div className='portfolio__header-content'>
            <h1>
               Hi, I am <span> Kashif Usman </span> 
            </h1>
            <div className='portfolio__header-type'>
              <span> 👉 </span>
              <h4 ref={textRef}> </h4>
            </div>
            <p>
            A full time Frontend Developer and a part time chef at home who makes sandwiches &#129386; for himself only.
            </p>
            <button type='button'><a href='#contact'> Hire Me</a></button>
            <div className='portfolio__header-sociallinks'>
                <span><a href='https://www.linkedin.com/in/iamkashifkhan/' target='_blank' rel='noreferrer'><FaLinkedinIn/></a></span>
                <span><a href='mailto:usmankashif544@gmail.com' target='_blank' rel='noreferrer'><AiOutlineMail/></a></span>
                <span><a href='https://www.facebook.com/iamkashifkhn' target='_blank' rel='noreferrer'><FaFacebookF/></a></span>
                <span><a href='https://www.instagram.com/iamkashifkhan/' target='_blank' rel='noreferrer'><AiOutlineInstagram/></a></span>
                <span><a href='https://github.com/iamkashifkhn' target='_blank' rel='noreferrer'><DiGithubAlt/></a></span>
            </div>
        </div>
        <div className='portfolio__header-image'>
            <img src={header} alt='header'/>
        </div>
    </div>
  )
}

export default Home