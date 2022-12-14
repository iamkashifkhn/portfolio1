import React from "react";
import Card from "../../components/Cards/card";
import Frontend from '../../assets/frontendweb.svg'
import Scrapping from '../../assets/scraping.svg'
import Graphic from '../../assets/graphic.svg'

import './services.css'

function services() {
  return (
    <div className="portfolio__services section__padding" id="services">
      <h1> Services I Provide </h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi libero fugit nulla earum fugiat dolor, iusto sequi totam, eius, placeat recusandae est assumenda quidem veritatis maiores quia minima nisi omnis?</p>
      <div className="portfolio__services-cards">
      <Card imageURL={Frontend} imageAlt='frontend' text="Frontend Developement" />
      <Card imageURL={Scrapping}  text="Web Scrapping" />
      <Card imageURL={Graphic}  text="Graphic Designing" />
      </div>
    </div>
  );
}

export default services;
