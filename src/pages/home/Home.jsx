import React, { useEffect, useState } from "react";
import "./Home.scss";
import Slide from "../../components/slide/Slide";
import { cards, projects } from "../../data";
import CatCard from "../../components/catCard/CatCard";
import ProjectCard from "../../components/projectCard/ProjectCard";

function Home() {
  const [cards1, setCards1] = useState([]);
  const [cards2, setCards2] = useState([]);
  const [cards3, setCards3] = useState([]);

  useEffect(() => {
    fetch("url").then((res) => {
      setCards1(res.data);
    });
    fetch("url").then((res) => {
      setCards2(res.data);
    });
    fetch("url").then((res) => {
      setCards3(res.data);
    });
  });

  return (
    <div className="home">
      <div className="first">
        <div className="container">
          <div className="left">
            <img src="../images/left_home.jpg" alt="" className="left_pic" />
            <div className="workers">
              <h3>1000+ WORKERS</h3>
              <br />
              <p>Active Professional Freelancers all Around the WORLD</p>
            </div>
          </div>
          <div className="center">
            <div className="container">
              <h1>Make work go Easy!</h1>
              <br />
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Tempore temporibus et provident molestiae, inventore fugiat
                deleniti pariatur quaerat aliquam repellat?
              </p>
            </div>
          </div>
          <div className="right">
            <img src="../images/right_home.jpg" alt="right_pic" />
            <div className="satisfy">
              <h2>PERFECT CLIENTS SATISFACTION</h2>
              <h1>
                999+
                <p>Transactions</p>
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="second">
        <div className="container">
          <h1>Most Popular Service</h1>
          <Slide slidesToShow={5} arrowsScroll={5}>
            {cards.map((card) => (
              <CatCard item={card} key={card.id} />
            ))}
          </Slide>
        </div>
      </div>
      <div className="third">
        <div className="container">
          <div className="left">
            <h1>Discover our amazing Features</h1>
            <div className="box">
              <h2>
                <img
                  src="./images/checklist.png"
                  alt=""
                  className="checklist"
                />
                Heading 1
              </h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. A
                corporis nam ullam distinctio est temporibus optio ipsa,
                possimus veritatis amet!
              </p>
            </div>
            <div className="box">
              <h2>
                <img
                  src="./images/checklist.png"
                  alt=""
                  className="checklist"
                />
                Heading 2
              </h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
                perferendis quas veniam voluptatibus sit necessitatibus expedita
                porro ad repudiandae magnam.
              </p>
            </div>
            <div className="box">
              <h2>
                <img
                  src="./images/checklist.png"
                  alt=""
                  className="checklist"
                />
                Heading 3
              </h2>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore
                soluta necessitatibus sequi, ex accusantium quo non possimus
                tempore velit ab.
              </p>
            </div>
          </div>
          <div className="right">
            <img src="./images/circular.png" alt="" className="circular" />
            <img src="./images/cream-shirt.png" alt="" className="creamShirt" />
            <img src="./images/blue-shirt.png" alt="" className="blueShirt" />
          </div>
        </div>
      </div>
      <div className="fourth">
        <div className="container">
          <h1>FAQS</h1>
          <h2>Have any Questions in mind?</h2>
          <div className="questions">
            <div className="question">
              <h3>
                <img
                  src="./images/checklist.png"
                  alt=""
                  className="checklist"
                />
                Heading 1
              </h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
                error quam doloribus nulla molestiae beatae at laboriosam
                accusamus aliquam optio?
              </p>
            </div>
            <div className="question">
              <h3>
                <img
                  src="./images/checklist.png"
                  alt=""
                  className="checklist"
                />
                Heading 2
              </h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
                error quam doloribus nulla molestiae beatae at laboriosam
                accusamus aliquam optio?
              </p>
            </div>
            <div className="question">
              <h3>
                <img
                  src="./images/checklist.png"
                  alt=""
                  className="checklist"
                />
                Heading 3
              </h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
                error quam doloribus nulla molestiae beatae at laboriosam
                accusamus aliquam optio?
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="fifth">
        <div className="container">
          <h1>Categories</h1>
          <Slide slidesToShow={5} arrowsScroll={5}>
            {cards.map((card) => (
              <CatCard item={card} key={card.id} />
            ))}
          </Slide>
        </div>
      </div>
      <div className="sixth">
        <div className="container">
          <h1>
            Recommended for <span>YOU</span>
          </h1>
          <Slide slidesToShow={4} arrowsScroll={4}>
            {projects.map((card) => (
              <ProjectCard item={card} key={card.id} />
            ))}
          </Slide>
        </div>
      </div>
    </div>
  );
}

export default Home;
