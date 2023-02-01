import React from 'react'
import './card.css'
import { motion } from "framer-motion";

function card(props) {

  return (
    <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 1.5 }}
        className="app__header-info"
      >
    <div className='portfolio__card'>
        <div className='portfolio__card-content'>
        <img src={props.imageURL} alt='imageAlt'/>
        <h4>{props.text}</h4>
        </div>
    </div>
    </motion.div>
  )
}

export default card