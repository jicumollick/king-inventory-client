import React from "react";
import Banner from "./Banner/Banner";
import Contact from "./Contact/Contact";
import PopularItems from "./PopularItems/PopularItems";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <PopularItems></PopularItems>
      <Contact></Contact>
    </div>
  );
};

export default Home;
