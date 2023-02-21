import React, { Fragment } from "react";
import Slider from "react-slick";
import "./carousel.css";

const CarouselSlider = () => {
  const dataItem = [
    {
      img: "item-1.jpg",
    },
    {
      img: "item-3.jpg",
    },
    {
      img: "item-2.jpg",
    },
    {
      img: "item-1.jpg",
    },
    {
      img: "item-3.jpg",
    },
    {
      img: "item-2.jpg",
    },
  ];
  let settings = {
    dots: false,
    autoplay: true,
    autoplaySpeed: 1000,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          arrows: false,
          // prevArrow: false,
          // nextArrow: false,
        },
      },
      {
        breakpoint: 720,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: false,
          // prevArrow: false,
          // nextArrow: false,
        },
      },
    ],
  };
  return (
    <Fragment>
      <div className="container">
        <div className="Carousel">
          {/* <div className="container"> */}
          <Slider {...settings}>
            {dataItem.map((item) => (
              <div className="Item">
                <img className="img-fluid" src={`/images/${item.img}`} alt="" />
              </div>
            ))}
          </Slider>
          {/* </div> */}
        </div>
      </div>
    </Fragment>
  );
};

export default CarouselSlider;
