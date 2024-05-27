import React from "react";
import Slider from "infinite-react-carousel";
import "./Gig.scss";

export default function Gig() {
  return (
    <div className="gig">
      <div className="container">
        <div className="left">
          <h1>Build a Professional Website With WordPress.Com</h1>
          <p className="desc">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et optio
            voluptate ut dicta aspernatur quaerat eos facere quisquam illo
            doloremque!
          </p>
          <div className="rating">
            <div className="stars">
              <img src="./img/star.png" alt="" />
              <img src="./img/star.png" alt="" />
              <img src="./img/star.png" alt="" />
              <img src="./img/star.png" alt="" />
              <img src="./img/star.png" alt="" />
            </div>
            <p>4.7 (938 Reviews)</p>
            <p className="top">TOP RATED SELLERS</p>
          </div>
          <video controls autoPlay src="../videos/gig-video.mp4"></video>
          <div className="user">
            <img src="../img/circular.png" alt="" />
            <div className="info">
              <span>Giovanni B.</span>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Laudantium sapiente eos harum placeat voluptatibus quo totam
                dolorum amet vero sit.
              </p>
            </div>
          </div>
          <h2>About this course</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
            assumenda consectetur maiores vero ab error ipsam maxime iure sint
            ullam dolores eveniet, inventore aliquid deserunt repellendus
            aspernatur eos, impedit optio?
          </p>
          <div className="reviews">
            <h2>Reviews</h2>
            <Slider slidesToShow={2} arrowsScroll={2}>
              <div className="item">
                <div className="user">
                  <img src="./img/circular.png" alt="" />
                  <p>Karldritz Farrel</p>
                  <div className="stars">
                    <img src="./img/star.png" alt="" />
                    <img src="./img/star.png" alt="" />
                    <img src="./img/star.png" alt="" />
                    <img src="./img/star.png" alt="" />
                    <img src="./img/star.png" alt="" />
                  </div>
                </div>
                <p>Lorem ipsum dolor sit amet.</p>
              </div>
              <div className="item">
                <div className="user">
                  <img src="./img/circular.png" alt="" />
                  <p>Karldritz Farrel</p>
                  <div className="stars">
                    <img src="./img/star.png" alt="" />
                    <img src="./img/star.png" alt="" />
                    <img src="./img/star.png" alt="" />
                    <img src="./img/star.png" alt="" />
                    <img src="./img/star.png" alt="" />
                  </div>
                </div>
                <p>Lorem ipsum dolor sit amet.</p>
              </div>
              <div className="item">
                <div className="user">
                  <img src="./img/circular.png" alt="" />
                  <p>Karldritz Farrel</p>
                  <div className="stars">
                    <img src="./img/star.png" alt="" />
                    <img src="./img/star.png" alt="" />
                    <img src="./img/star.png" alt="" />
                    <img src="./img/star.png" alt="" />
                    <img src="./img/star.png" alt="" />
                  </div>
                </div>
                <p>Lorem ipsum dolor sit amet.</p>
              </div>
              <div className="item">
                <div className="user">
                  <img src="./img/circular.png" alt="" />
                  <p>Karldritz Farrel</p>
                  <div className="stars">
                    <img src="./img/star.png" alt="" />
                    <img src="./img/star.png" alt="" />
                    <img src="./img/star.png" alt="" />
                    <img src="./img/star.png" alt="" />
                    <img src="./img/star.png" alt="" />
                  </div>
                </div>
                <p>Lorem ipsum dolor sit amet.</p>
              </div>
            </Slider>
          </div>
        </div>
        <div className="right">
          <div className="container">
            <h2>BASIC</h2>
            <h1>
              $<span>32</span>
            </h1>
            <button>ORDER NOW</button>
            <button>Free Preview</button>
            <div className="checks">
              <span>
                <img src="./img/checklist.png" alt="" />
                Royalty and Copyright free
              </span>
              <span>
                <img src="./img/checklist.png" alt="" />
                Motion Graphic
              </span>
              <span>
                <img src="./img/checklist.png" alt="" />
                Sound Effects
              </span>
              <span>
                <img src="./img/checklist.png" alt="" />
                Project file included
              </span>
            </div>
          </div>
          <button>Message Seller</button>
        </div>
      </div>
    </div>
  );
}
