import React from 'react'
import './about.css'
import About from '../../assets/about.jpg'

function about() {
  return (
    <div className='portfolio__about section__padding' id='about'>
        <div className='portfolio__about-content'>
            <h1>About Me </h1>
            <h3> My name is <span>Kashif Usman</span> </h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
              Vel natus accusamus necessitatibus autem nostrum quas saepe, 
              molestias iusto, voluptatem quia consectetur quasi assumenda eveniet omnis? 
              Ipsam nam assumenda quam molestias! Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
              Voluptate aut, unde culpa assumenda accusamus corporis.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
              Vel natus accusamus necessitatibus autem nostrum quas saepe, 
              molestias iusto, voluptatem quia consectetur quasi assumenda eveniet omnis? 
              Ipsam nam assumenda quam molestias! Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
              Voluptate aut, unde culpa assumenda accusamus corporis.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet explicabo quae fuga, vero beatae itaque voluptates commodi, voluptatem, earum possimus inventore facere. Eius enim minima cupiditate quae dicta reiciendis veritatis!
            </p>
        </div>
        <div className='portfolio__about-image'>
            <img src={About} alt='about'/>
        </div>
    </div>
  )
}

export default about