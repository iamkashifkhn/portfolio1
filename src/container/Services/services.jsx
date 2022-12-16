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
      <p> I create responsive web applications in react.js. In addition, 
        I scrape websites to provide datasets. I also have graphic design experience 
        and have assisted startups by creating creative designs to help their businesses.
        </p>
      <div className="portfolio__services-cards">
      <Card imageURL={Frontend} imageAlt='frontend' text="Frontend Development" />
      <Card imageURL={Scrapping}  text="Web Scrapping" />
      <Card imageURL={Graphic}  text="Graphic Designing" />
      </div>
    </div>
  );
}

export default services;
