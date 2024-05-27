import React, { useState } from "react";
import "./Gigs.scss";
import {gigs} from "../../data"
import GigCard from "../../components/gigCard/GigCard"

export default function Gigs() {
  const [sort, setSort] = useState("sales");
  const [activeIndex, setActiveIndex] = useState(0);

  const filter = ["Recommended", "New Sellers", "Low Budget"];

  const reSort = (type) => {
    setSort(type);
  };

  return (
    <div className="gigs">
      <div className="container">
        <h1>AI artist</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
          iusto illo recusandae, sint id excepturi voluptatem corporis dolore!
          Ex, corrupti?
        </p>
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
        <div className="cards">
          {gigs.map((gig) => (
            <GigCard key={gig.id} item={gig} />
          ))}
        </div>
      </div>
    </div>
  );
}
