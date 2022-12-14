import React from "react";
import "./work.css";
import {DiGithubAlt} from 'react-icons/di'

function work(props) {
  return (
    <div className="portfolio__card-main">
      <div className="portfolio__project-card">
        <div className="portfolio__project-card_image">
          <img src={props.imageURL} alt={props.alt} />
        </div>
        <div className="portfolio__project-card_content">
            <h4>{props.text}</h4>
            <p>{props.subtext}</p>
            <p>Tech: <span> {props.tech}</span></p>
            <div className="portfolio__proejct-code_links">
              <span><DiGithubAlt/></span>
              <p><a href={props.link} target='_blank' rel="noreferrer" > View Code </a></p>
            </div>
            
        </div>
      </div>
    </div>
  );
}

export default work;
