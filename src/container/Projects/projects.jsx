import React from 'react'
import './projects.css'
import Card from '../../components/Work/work'
import GPT from '../../assets/GPT.png'
function projects() {
  return (
    <div className='portfolio__project section__padding' id='projects'>
        <h1>My Projects</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Reiciendis et harum quaerat. Deserunt ullam illo assumenda 
          aliquid magnam nostrum similique, eum ratione eveniet, 
          dolorem iure qui earum nemo, quas quod!</p>
          <div className='portfolio__project-cards'>
              <Card imageURL={GPT} alt='card' text='FYP' link='https://github.com/iamkashifkhn/gpt' subtext='Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias veniam, impedit earum unde animi consectetur deleniti vitae cumque nam.'/>
              <Card imageURL={GPT} alt='card' text='Portfolio' link='https://github.com/iamkashifkhn/gpt' subtext='Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias veniam, impedit earum unde animi consectetur deleniti vitae cumque nam.'/>
              <Card imageURL={GPT} alt='card' text='ComplyVantage' link='https://github.com/iamkashifkhn/gpt' subtext='Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias veniam, impedit earum unde animi consectetur deleniti vitae cumque nam.'/>
          </div>
    </div>
  )
}

export default projects
