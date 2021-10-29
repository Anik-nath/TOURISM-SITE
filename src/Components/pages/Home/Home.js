import React from "react";
import Banner from "../../Header/banner/Banner";
import BestOffer from "../BestOffer/BestOffer";
import Why from "../Why/Why";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <div>
        <BestOffer></BestOffer>
      </div>
      <Why></Why>
    </div>
  );
};

export default Home;
