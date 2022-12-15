import React from 'react'
import './skills.css'
import html from '../../assets/html.svg'
import css from '../../assets/css.svg'
import tailwind from '../../assets/tailwind.svg'
import bootstrap from '../../assets/bootstrap.svg'
import sass from '../../assets/sass.svg'
import javascript from '../../assets/javascript.svg'
import react from '../../assets/react.svg'
import scrapy from '../../assets/scrapy.png'
import antdesign from '../../assets/antdesign.svg'

function skills() {
  return (
    <div className='portfolio__skills section__padding'>
            <h1>Tools and Technologies that I use</h1>
            <div className='portfolio__skills-cards'>
                <span><img src={html} alt='html'/></span>
                <span><img src={css} alt='css'/></span>
                <span><img src={tailwind} alt='tailwind'/></span>
                <span><img src={sass} alt='sass'/></span>
                <span><img src={bootstrap} alt='bootstrap'/></span>
                <span><img src={javascript} alt='javascript'/></span>
                <span><img src={react} alt='react'/></span>
                <span><img src={scrapy} alt='scrapy'/></span>
                <span><img src={antdesign} alt='scrapy'/></span>
            </div>
    </div>
  )
}

export default skills