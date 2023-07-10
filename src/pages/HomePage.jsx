import React from "react";
import Banner from "../components/banner/Banner";
import Header from "../components/header/Header";
import Catagory from "../components/category/Catagory";
import Arrivals from "../components/arrivals/Arrivals";

const HomePage = () => {
  return (
    <div>
      <Header />
      <Banner />
      <Catagory />
      <Arrivals />
    </div>
  );
};

export default HomePage;
