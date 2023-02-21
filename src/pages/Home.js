import React from "react";
import HeroSlider from "../component/banner/HeroSlider";
import CarouselSlider from "../component/crousel/CarouselSider";
import Header from "../component/header/Header";

const Home = () => {
  return (
    <div>
      <Header />
      <HeroSlider />
      <CarouselSlider />
    </div>
  );
};

export default Home;
