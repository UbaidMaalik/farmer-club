import React, { Fragment } from "react";
import "./slide.css";
import { Slide } from "react-slideshow-image";

const slideContent = () => (
  <div>
    <p>The first Collateralizable NFT collection.</p>
    <button className="connectBtn">CONNECT WALLET</button>
  </div>
);

const slideImages = [
  {
    url: "images/banner-2.jpg",
    caption: slideContent,
  },
  {
    url: "images/banner-1.jpg",
    caption: slideContent,
  },
  {
    url: "images/banner-2.jpg",
    caption: slideContent,
  },
];

const HeroSlider = () => {
  return (
    <Fragment>
      <div className="container-fluid p-0">
        <div className="slide-container">
          <Slide duration="1000">
            {slideImages.map((slideImage, index) => (
              <div className="each-slide" key={index}>
                <div style={{ backgroundImage: `url(${slideImage.url})` }}>
                  <span>
                    <slideImage.caption />
                  </span>
                </div>
              </div>
            ))}
          </Slide>
        </div>
      </div>
    </Fragment>
  );
};

export default HeroSlider;
