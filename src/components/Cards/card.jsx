import React from 'react'
import './card.css'

function card(props) {
  return (
    <div className='portfolio__card'>
        <div className='portfolio__card-content'>
        <img src={props.imageURL} alt='imageAlt'/>
        <h4>{props.text}</h4>
        </div>
    </div>
  )
}

export default card