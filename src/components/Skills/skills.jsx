import React from 'react'
import './skills.css'
import {Tooltip} from 'antd'
import data from './skillsdata'
function Skills() {

  return (
    <div className='portfolio__skills section__padding'>
            <h1>Tools and Technologies that I use</h1>
            <div className='portfolio__skills-cards slide-top'>
              {
                data.map((data, idx)=>{
                    return(
                      <Tooltip color='#031B34' title={data.title} placement='top' key={idx}>
                      <span><img src={data.imageSRC} alt={data.alt}/></span>
                      </Tooltip>
                    )
                })
              }
            </div>
    </div>
  )
}

export default Skills