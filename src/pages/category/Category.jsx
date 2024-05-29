import React, { useState } from "react";
import "./Category.scss";
import Slider from "infinite-react-carousel";
import { cards } from "../../data";
import CatCard from "../../components/catCard/CatCard";

export default function Category() {
  const [activeIndex, setActiveIndex] = useState(0);

  const filter = [
    "Recommended",
    "Marketing",
    "Graphic Design",
    "Websites",
    "Writing",
    "Business",
    "Video & Photography",
    "Programs",
  ];

  return (
    <div className="cat">
      <div className="container">
        <div className="recommendation">
          <div className="text">
            <h3>Our Recommendations</h3>
            <h1>FIND THE PERFECT SERVICE!</h1>
          </div>
          <div className="card">
            <Slider slidesToShow={3} arrowsScroll={3} className="recSlide">
              {cards.map((card) => (
                <CatCard item={card} key={card.id} />
              ))}
            </Slider>
          </div>
        </div>
        <div className="menu">
          {filter.map((text, index) => (
            <span
              key={index}
              className={`filter-item ${activeIndex === index ? "active" : ""}`}
              onClick={() => setActiveIndex(index)}
            >
              {text}
            </span>
          ))}
        </div>
        <div className="showCards">
          <Slider slidesToShow={5} arrowsScroll={5}>
            {cards.map((card) => (
              <CatCard item={card} key={card.id} />
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}
