import React from "react";
import Banner from "./Banner/Banner";
import Contact from "./Contact/Contact";
import PopularItems from "./PopularItems/PopularItems";
import Reviews from "./Reviews/Reviews";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <PopularItems></PopularItems>
      <Reviews></Reviews>
      <Contact></Contact>
    </div>
  );
};

export default Home;
