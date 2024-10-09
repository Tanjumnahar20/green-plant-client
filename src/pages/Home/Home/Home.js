/* eslint-disable jsx-a11y/heading-has-content */
/* eslint-disable no-unused-vars */
import React from "react";
import About from "../../About/About";
import ContactUs from "../../ContactUs/ContactUs";
import Advertise from "../Advertise/Advertise";
import Shop from "../Advertise/Shop";
import Banner from "../Banner/Banner";
import FeedBack from "../FeedBack/FeedBack";
import Products from "../Products/Products";
import ShoppingArea from "../ShoppingArea/ShoppingArea";
import Video from "../Video/Video";

const Home = () => {
  return (
    <main>
      <Banner />
      <ShoppingArea />
      <Products />
      <Advertise />
      <Shop />
      <FeedBack />
      <Video />
  
    </main>
  );
};

export default Home;
