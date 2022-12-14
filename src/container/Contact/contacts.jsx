import React from 'react'
import './contact.css'
import Card from '../../components/Cards/card'
import Home from '../../assets/home.svg'
import Phone from '../../assets/phone.svg'
import Email from '../../assets/email.svg'


function contacts() {
  return (
    <div className='portfolio__contacts section__padding' id='contact'>
      <h1> Contact with me</h1>
      <p>Lets build something together :) </p>
      <div className='portfolio__contact-content'>
          <Card imageURL={Home} text='Islamabad, Pakistan'/>
          <Card imageURL={Phone} text='+92 305 6086871'/>
          <Card imageURL={Email} text='usmankashif544@gmail.com'/>
      </div>
    </div>
  )
}

export default contacts