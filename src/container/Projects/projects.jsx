import React from 'react'
import './projects.css'
import Card from '../../components/Work/work'
import Portfolio from '../../assets/portfolio.PNG'
import ComplyVantage from '../../assets/complyVantage.PNG'
import AM from '../../assets/AM.png'

function projects() {
  return (
    <div className='portfolio__project section__padding' id='projects'>
        <h1>My Projects</h1>
        <p>Here are few samples of my previous work &#128525;</p>
          <div className='portfolio__project-cards'>
              <Card 
              imageURL={AM} 
              alt='card' 
              text='AM' 
              link='https://github.com/iamkashifkhn/Assets-Management' 
              subtext='AM is an Assets Management web based application with a purpose to maintain office assets record. It uses firebase as database and user authentication.'
              tech='HTML5, CSS3, React, Firebase '
              />
              
              <Card 
              imageURL={Portfolio} 
              alt='card' 
              text='Portfolio' 
              link='https://github.com/iamkashifkhn/portfolio1' 
              subtext='Portfolio is my updated person portfolio website which is build by heart. It is open source and you are free to use the code as well from the Github link.'
              tech='HTML5, CSS3, AntD, React'
              />
              <Card 
              imageURL={ComplyVantage} 
              alt='card' 
              text='ComplyVantage' 
              link='https://github.com/iamkashifkhn/dashbaord' 
              subtext='ComplyVantage is a compliance tool to audit codes of the organization. It has a huge knowledgebase which is made by scrapping open source code.'
              tech='HTML5, CSS3, Bootstrap, React'
              />
          </div>
    </div>
  )
}

export default projects
